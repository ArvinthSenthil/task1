import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {API} from "./globe.js"
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function Editmovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
 
  useEffect(()=>{fetch(`${API}/${id}`,{
    method:"GET"}) //Promise
    .then((data)=>data.json())// Response
    .then((mv)=>setMovie(mv));},[])
    
  return (
   <div>
  {movie? <Editmovieform movie={movie}/> : <h1>Loading</h1>}
   </div>
  );
}

const movieValidationSchema = yup.object({
 movie_name : yup.string().required("Enter movie_name"),
 poster: yup
   .string()
   .required("Give poster URL")
   .min(4, "need a longer input"),
   rating:yup.number().required("rating required").min(0).max(10),
   description:yup.string().required("Give description").min(20),
   trailer:yup.string().required("Give trailer URL").min(4),
   
});
function Editmovieform({movie}){
  const his=useHistory();
 
  const formik = useFormik({
    initialValues: { movie_name: movie.movie_name, poster:movie.poster,rating:movie.rating,description:movie.description,trailer:movie.trailer },
     validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
      editMovie(updatedMovie)
    },
  });
  const editMovie = (updatedMovie)=>{
  
  fetch(`${API}/${movie.id}`,{
    method:"PUT", 
    body: JSON.stringify(updatedMovie),
     headers:{
       "content-Type" : "application/json"
    }}) .then(() =>his.push("/movies"))};
  
 
  return(
    <form  onSubmit={formik.handleSubmit} className="movie_form">
    <TextField  id="movie_name"   name="movie_name" variant="outlined" value={formik.values.movie_name}  onChange={formik.handleChange}
        onBlur={formik.handleBlur} error={formik.touched.movie_name && formik.errors.movie_name} helperText={formik.touched.movie_name && formik.errors.movie_name ? formik.errors.movie_name : ""} />

    <TextField id="poster" type="text"  name="poster" variant="outlined" value={formik.values.poster}  onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.poster && formik.errors.poster}  helperText= {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""} />
    <TextField id="rating" type="number"  name="rating"  variant="outlined" value={formik.values.rating}  onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.rating && formik.errors.rating}  helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""} />
    <TextField id="description" type="text"  name="description"  variant="outlined" value={formik.values.description}  onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.description && formik.errors.description}  helperText= {formik.touched.description && formik.errors.description ? formik.errors.description : ""} />
    <TextField id="trailer" type="text"  name="trailer"  variant="outlined" value={formik.values.trailer}  onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.trailer && formik.errors.trailer}  helperText= {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""} />
    <Button  color="success" variant="contained" type="submit">Save</Button>
    <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>back</Button>
   
    </form>
  
)
}

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from './globe';
import { useFormik } from "formik";
import * as yup from "yup";

export function Addmovie() {
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
  const formik = useFormik({
    initialValues: { movie_name: "", poster: "",rating:"",description:"",trailer:"" },
     validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      addMovie(newMovie)
    },
  });
  
  
  const his=useHistory();
 const addMovie = (newMovie) => {
    
  

console.log("onSubmit",newMovie)
    fetch(`${API}`,{
      method:"POST", 
      body: JSON.stringify(newMovie),
       headers:{
         "content-Type" : "application/json"
      }})
  
    .then(() =>his.push("/movies"))
   };

  return (
   
      <form className="movie_form" onSubmit={formik.handleSubmit}>
      <TextField  id="movie_name" type="text"  movie_name="movie_name" label="Movie Name" variant="outlined" values={formik.values.movie_name}  onChange={formik.handleChange}
          onBlur={formik.handleBlur} />{formik.touched.movie_name && formik.errors.movie_name ? formik.errors.movie_name : ""}

      <TextField id="poster" type="text"  movie_name="poster" label="Movie Poster" variant="outlined" values={formik.values.poster}  onChange={formik.handleChange}  onBlur={formik.handleBlur} /> {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
      <TextField id="rating" type="number"  movie_name="rating" label="Movie rating" variant="outlined" values={formik.values.rating}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
      <TextField id="description" type="text"  movie_name="description" label="Movie description" variant="outlined" values={formik.values.description}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.description && formik.errors.description ? formik.errors.description : ""}
      <TextField id="trailer" type="text"  movie_name="trailer" label="Movie trailer" variant="outlined" values={formik.values.trailer}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}

      <Button variant="contained" type="submit">Add movie</Button>
      <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>back</Button>
      </form>
  
  );
}


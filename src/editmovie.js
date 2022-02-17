import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {API} from "./globe.js"

export function Editmovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
 
  useEffect(()=>{fetch(`${API}/${id}`,{
    method:"GET"}) //Promise
    .then((data)=>data.json())// Response
    .then((mv)=>setMovie(mv));},[])
    
  
  
  
  
 
    
   
  

  return (
   <div>
  {movie?   <Editmovieform movie={movie}/> : <h1>Loading</h1>}
   </div>
  );
}
function Editmovieform({movie}){
  const [movieName, setMovieName] = useState(movie.movie_name);
  const [moviePoster, setMoviePoster] = useState(movie.poster);
  const [movieRating, setMovieRating] = useState(movie.rating);
  const [movieDes, setMovieDes] = useState(movie.description);
  const [movietrailer, setMovietrailer] = useState(movie.trailer);
  const his=useHistory();
  return( <div className="movie_form">
  <TextField
  value={movieName}
  id="outlined-basic"  variant="outlined" onChange={(event) => setMovieName(event.target.value)} />

  <TextField 
  value={moviePoster}
  id="outlined-basic" variant="outlined" onChange={(event) => setMoviePoster(event.target.value)} />
  <TextField
  value={movieRating}
  id="outlined-basic" l variant="outlined" onChange={(event) => setMovieRating(event.target.value)} />
  <TextField
  value={movieDes}
  id="outlined-basic"  variant="outlined" onChange={(event) => setMovieDes(event.target.value)} />
  <TextField
  value={movietrailer} 
  id="outlined-basic"  variant="outlined" onChange={(event) => setMovietrailer(event.target.value)} />

  <Button variant="contained" color="success"
   onClick={()=> {
    const updatedMovie = {
      movie_name: movieName,
      poster: moviePoster,
      rating: movieRating,
      description: movieDes,
      trailer:movietrailer,
    };
    fetch(`${API}/${movie.id}`,{
      method:"PUT", 
      body: JSON.stringify(updatedMovie),
       headers:{
         "content-Type" : "application/json"
      }})
    
    .then(() =>his.push("/movies"))
    
 
    }}>
    save</Button>
</div>)
}

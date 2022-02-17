import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect } from "react";
import { useState } from "react";
import {API} from "./globe.js"

export function Moviedetails() {
  const { id } = useParams();
  const [movielist, setMovieslist] = useState({});
 
 

  useEffect(()=>{fetch(`${API}/${id}`,{
    method:"GET"}) //Promise
    .then((data)=>data.json())// Response
    .then((mv)=>setMovieslist(mv));},[])

  const his=useHistory();
  return (

    <div className="movie-new">
      <iframe width="1000" height="536" src={movielist.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className="movie-detailed-container">
        <h3>{movielist.movie_name} <span> ⭐ {movielist.rating} </span> </h3>


      </div>
      <p>{movielist.description}</p>
      <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>
  Back
</Button>
    </div>

  );
}

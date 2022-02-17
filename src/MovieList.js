import { Movie } from "./Movie";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from "react";
import { useState } from "react";
import {API} from "./globe.js"




export function MovieList() {
  const history=useHistory();
  const [movies, setMovies] = useState([]);
 const getMovies=()=>{fetch(`${API}`,{
    method:"GET"}) //Promise
    .then((data)=>data.json())// Response
    .then((mvs)=>setMovies(mvs));}

    useEffect(()=> getMovies(),[])
    const deleteMovie = (id)=> {
      fetch(`${API}/${id}`,{
        method:"DELETE"}).then(()=>getMovies())
    }
    
  return (
    <section className="movie-list">
       <h1 className="title">Favourite Movies list</h1>
      <div className="movie-list-container">
       
        {movies.map(({movie_name,poster,rating,description,id},index) => (
          <Movie
        key={index}
            name={movie_name}
            pic={poster}
            rating={rating}
            description={description} 
            id={id}
            
            editButton={
              <Button

              className="editbtn"
              color="secondary"
              startIcon={<EditIcon />}
                onClick={()=>{
                  history.push(`/movies/edit/${id}`)
              }}></Button>}

            deleteButton={
            <Button 
             style={{ marginLeft:"auto" }}
            className="dltbtn"
            color="error"
            startIcon={<DeleteIcon />}
              onClick={()=>deleteMovie(id)

               }></Button>}
            
            />
            
        ))
      
        }
       </div>
    </section>
  );
}

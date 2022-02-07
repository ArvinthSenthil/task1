import { Movie } from "./Movie";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList({movie_list,setMovies}) {
  
  return (
    <section className="movie-list">
      <div className="movie-list-container">
        {movie_list.map((el, index) => (
          <Movie
            key={index}
            name={el.movie_name}
            pic={el.poster}
            rating={el.rating}
            description={el.description} 
            id={index}
            deleteButton={
            <Button 
            
            className="dltbtn"
            color="error"
            startIcon={<DeleteIcon />}
              onClick={()=>{
                console.log(index);
              const copyMovieList=[...movie_list];
              console.log(copyMovieList)
              copyMovieList.splice(index,1)
              setMovies(copyMovieList)
            }}></Button>}/>
            
        ))
      
        }
          
      </div>

    </section>
  );
}

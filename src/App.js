import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Switch, Route, Link } from "react-router-dom";

import{TicTacToe} from "./game";

import { useState } from "react";
import { MovieList } from "./MovieList";
import{AddColor} from "./Addcolor.js"

export default function App() {



  
  const movie_list = [
    {
      movie_name: "Jai Bhim(2021)",
      poster: "https://www.pinkvilla.com/imageresize/jai_bhim_twiiter_review_1.jpg?width=752&format=webp&t=pvorg",
      description:
      "When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
        rating: "9.3",
    },
    {
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUkQ340Bx1uqA13162eU9DV_E3gl2sLLUs9N-dnic1G41sQuwU6YAcT5Qdd1TAOsZTLQ&usqp=CAU",
     movie_name:"The Shawshank Redemption(1994)",
      rating:"9.3",
      description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
      
  
      
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      movie_name:"The Godfather(1972)",
      rating:"9.2",
      description:"The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
    
    },
    {
      poster:"https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
      movie_name:"The Dark Knight(2008)",
      rating:"9.0",
      description:"When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
      
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      movie_name:"The Godfather part 2(1974)",
      rating:"9.0",
      description:"The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
      
    },
   
  ];

  const [movies, setMovies] = useState(movie_list);

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDes, setMovieDes] = useState("");

  const addMovie = () => {
   
    const newMovie = {
      movie_name: movieName,
      poster: moviePoster,
      rating: movieRating,
      description: movieDes,
    };
    console.log([...movies, newMovie], newMovie);
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
    

<ul>

        <li>
          
          <Link to="/movies" >Movies</Link>
        </li>
        <li>
          <Link to="/colorgame">colorgame</Link>
        </li>
        <li>
          <Link to="/game">TicTacToe</Link>
        </li>
       
        
        <li>
          <Link to="/">Home</Link>
        </li>
       
      
      </ul>
      <Switch>
       
        <Route path="/movies">
        <div className="movie_form">
      <TextField id="outlined-basic"  label="Movie Name" variant="outlined"  onChange={(event) => setMovieName(event.target.value)}/>
     
      <TextField id="outlined-basic"  label="Movie Poster" variant="outlined"  onChange={(event) => setMoviePoster(event.target.value)}/>
      <TextField id="outlined-basic"  label="Movie rating" variant="outlined"  onChange={(event) => setMovieRating(event.target.value)}/>
      <TextField id="outlined-basic"  label="Movie description" variant="outlined"  onChange={(event) => setMovieDes(event.target.value)}/>
       
 <Button  variant="contained"  onClick={addMovie}>Add movie</Button>
 
 
 
 
      </div>
      <MovieList movie_list={movies}></MovieList>
        </Route>

        <Route path="/colorgame">
         <AddColor />
        </Route>

        <Route path="/game">
          <TicTacToe/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
       
       
        </Switch>


  
     
     
    
    </div>
  );
}
function Home() {
  return (
    <div>
    <h1>Welcome to movie app</h1>
      {/* <TableComp /> */}
    </div>
  );
}



import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Switch, Route, Link ,Redirect} from "react-router-dom";

import{TicTacToe} from "./game";

import { useState } from "react";
import { MovieList } from "./MovieList";
import{AddColor} from "./Addcolor.js"
import { Notfound } from "./Notfound";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function App() {



  
  const movie_list = [
    {
      movie_name: "Jai Bhim(2021)",
      poster: "https://www.pinkvilla.com/imageresize/jai_bhim_twiiter_review_1.jpg?width=752&format=webp&t=pvorg",
      description:
      "When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
        rating: "9.3",
        trailer:"https://youtu.be/Gc6dEDnL8JA",
    },
    {
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUkQ340Bx1uqA13162eU9DV_E3gl2sLLUs9N-dnic1G41sQuwU6YAcT5Qdd1TAOsZTLQ&usqp=CAU",
     movie_name:"The Shawshank Redemption(1994)",
      rating:"9.3",
      description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
      
  trailer:"https://youtu.be/NmzuHjWmXOc",
      
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      movie_name:"The Godfather(1972)",
      rating:"9.2",
      description:"The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
    trailer:"https://youtu.be/sY1S34973zA",
    },
    {
      poster:"https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
      movie_name:"The Dark Knight(2008)",
      rating:"9.0",
      description:"When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
      trailer:"https://youtu.be/Q63qjIXMqwU",
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      movie_name:"The Godfather part 2(1974)",
      rating:"9.0",
      description:"The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
      trailer:"https://youtu.be/9O1Iy9od7-A",
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
      <Route path="/movies/:id">
         <Moviedetails  movie_list={movies} />
        </Route>
        <Route path="/films">
          <Redirect to="/movies"></Redirect>
        </Route>
       
        <Route path="/movies">
        <div className="movie_form">
      <TextField id="outlined-basic"  label="Movie Name" variant="outlined"  onChange={(event) => setMovieName(event.target.value)}/>
     
      <TextField id="outlined-basic"  label="Movie Poster" variant="outlined"  onChange={(event) => setMoviePoster(event.target.value)}/>
      <TextField id="outlined-basic"  label="Movie rating" variant="outlined"  onChange={(event) => setMovieRating(event.target.value)}/>
      <TextField id="outlined-basic"  label="Movie description" variant="outlined"  onChange={(event) => setMovieDes(event.target.value)}/>
       
 <Button  variant="contained"  onClick={addMovie}>Add movie</Button>
 
 
 
 
      </div>
      <MovieList movie_list={movies} setMovies={setMovies}></MovieList>
        </Route>

        <Route path="/colorgame">
         <AddColor />
        </Route>
        

        <Route path="/game">
          <TicTacToe/>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

       <Route path="**">
       <Notfound /> 
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
function Moviedetails({movie_list}){
  const{id}=useParams();
  console.log(id)
  const a=movie_list[id]
  
  
  return (
   
    <div className="movie-new">
       <iframe width="1000" height="536" src={a.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
        <div className="movie-detailed-container">
      <h3>{a.movie_name} <span> ⭐ {a.rating} </span> </h3>
      
      
    </div>
    <p>{a.description}</p>
    </div>
        
  )
}
import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

import { useState } from "react";
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

      <div className="head">
        <h1 className="title">Add Top Rated Movies</h1>
      </div>
  
      <div className="movie_form">
      <TextField id="outlined-basic"  label="Movie Name" variant="outlined"  onChange={(event) => setMovieName(event.target.value)}/>
     
      <TextField id="outlined-basic"  label="Movie Poster" variant="outlined"  onChange={(event) => setMoviePoster(event.target.value)}/>
      <TextField id="outlined-basic"  label="Movie rating" variant="outlined"  onChange={(event) => setMovieRating(event.target.value)}/>
      <TextField id="outlined-basic"  label="Movie description" variant="outlined"  onChange={(event) => setMovieDes(event.target.value)}/>
       
 <Button  variant="contained"  onClick={addMovie}>Add movie</Button>
 
        
      </div>
      <MovieList movie_list={movies}></MovieList>
    
    </div>
  );
}

export function Counter() {
  // const likes = 1;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      <ButtonGroup disableElevation variant="contained">
  <Button onClick={() => setLike(like + 1)}> <span role="img">👍</span>{like}</Button>
  <Button onClick={() => setDislike(dislike + 1)}><span role="img">👎</span>{dislike} </Button>
</ButtonGroup>


    </div>
  );
}


export function Movie({ name, pic, rating, description }) {
  return (
    <div className="movie-container">
      <img src={pic} alt={name} className="movie-poster" />
      <div className="movie-info">
        <div className="movie-specs">
          <h3>{name} </h3>
          <p>
            <span role="img" aria-label="star">
              ⭐ {rating}
            </span>
          </p>
        </div>
        <Des description={description}/>
        <Counter />
      </div>
    </div>
  );
}


 function MovieList(movie) {
  return (
    <section className="movie-list">
      <div className="movie-list-container">
        {movie.movie_list.map((el, index) => (
          <Movie
            key={index}
            name={el.movie_name}
            pic={el.poster}
            rating={el.rating}
            description={el.description}
             
            
          />
        ))}
      </div>
      
    </section>
  );
}



const user=[
  {
    poster:"https://www.pinkvilla.com/imageresize/jai_bhim_twiiter_review_1.jpg?width=752&format=webp&t=pvorg",
    name:"Jai Bhim(2021)",
    rating:"9.3",
    description:"When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
    director:"T J Gnanavel",
    stars:"Suriya,Lijo Mol Jose,Manikandan,Rajsha vijayan"
  },
 
]
const Des= ({description}) => {
  const [showText, setShowText] = useState(false);
  return (
    <div>
        {/* <Button variant="contained"  className="button-toggle"  >   Description  </Button> */}
        
        <ToggleButton value="left" aria-label="left aligned"onClick={() => setShowText(!showText)}>
        <FormatAlignLeftIcon />
      </ToggleButton>
      {showText && <p className="pfont"> {description} </p>}
   
    </div>
  );
};
import "./App.css";

import { useState } from "react";
export default function App() {
  
  const movie_list = [
    {
      movie_name: "Jai Bhim(2021)",
      poster: "https://www.pinkvilla.com/imageresize/jai_bhim_twiiter_review_1.jpg?width=752&format=webp&t=pvorg",
      story:
      "When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
        rating: "9.3",
    },
    {
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUkQ340Bx1uqA13162eU9DV_E3gl2sLLUs9N-dnic1G41sQuwU6YAcT5Qdd1TAOsZTLQ&usqp=CAU",
     movie_name:"The Shawshank Redemption(1994)",
      rating:"9.3",
      story:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
      
  
      
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      movie_name:"The Godfather(1972)",
      rating:"9.2",
      story:"The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
    
    },
    {
      poster:"https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
      movie_name:"The Dark Knight(2008)",
      rating:"9.0",
      story:"When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
      
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      movie_name:"The Godfather part 2(1974)",
      rating:"9.0",
      story:"The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
      
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
      story: movieDes,
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
        <input
          type="text"
          placeholder="Movie Name"
          onChange={(event) => setMovieName(event.target.value)}
        />
        <input
          type="text"
          onChange={(event) => setMoviePoster(event.target.value)}
          placeholder="Movie Poster"
        />
        <input
          type="number"
          onChange={(event) => setMovieRating(event.target.value)}
          placeholder="Movie Rating"
        />
        <input
          type="text"
          onChange={(event) => setMovieDes(event.target.value)}
          placeholder="Movie story"
        />

        <button onClick={addMovie}>Add Movie</button>
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
      <button onClick={() => setLike(like + 1)}>
        <span role="img">👍</span> {like}
      </button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
     
    </div>
  );
}


export function Movie({ name, pic, rating, story }) {
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
        <p className="movie-summary">{story}</p>
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
            story={el.story}
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
    story:"When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
    director:"T J Gnanavel",
    stars:"Suriya,Lijo Mol Jose,Manikandan,Rajsha vijayan"
  },
 
]
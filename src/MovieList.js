import { Movie } from "./Movie";

export function MovieList(movie) {
  return (
    <section className="movie-list">
      <div className="movie-list-container">
        {movie.movie_list.map((el, index) => (
          <Movie
            key={index}
            name={el.movie_name}
            pic={el.poster}
            rating={el.rating}
            description={el.description} />
        ))}
      </div>

    </section>
  );
}

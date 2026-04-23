import MovieItem from "./MovieItem";

export default function MovieList({ movies, onWatch }) {
  return (
    <div className="movie-list-container">
      <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onWatch={onWatch} />
        ))}
      </ul>
      <p className="watched-count">Watched movies: {movies.filter((m) => m.watched).length}/5</p>
    </div>
  );
}
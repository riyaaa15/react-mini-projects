import MovieItem from "./MovieItem";

export default function MovieList({ movies, onWatch }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onWatch={onWatch} />
        ))}
      </ul>
      <p>Watched movies: {movies.filter((m) => m.watched).length}/5</p>
    </div>
  );
}
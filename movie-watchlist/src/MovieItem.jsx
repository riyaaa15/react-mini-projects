export default function MovieItem({ movie, onWatch }) {
  return (
    <li key={movie.id}>
      <span style={{ textDecoration: movie.watched ? "line-through" : "none" }}>
        {movie.name}
      </span>
      - {movie.genre} - ⭐ {movie.rating}
      <button onClick={() => onWatch(movie.id)}>Mark Watched</button>
    </li>
  );
}
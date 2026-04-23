export default function MovieItem({ movie, onWatch }) {
  return (
    <li className="movie-item" key={movie.id}>
      <span className={`movie-name ${movie.watched ? "watched" : ""}`}>
        {movie.name}
      </span>
      - {movie.genre} - ⭐ {movie.rating}
      <button className="watch-btn" onClick={() => onWatch(movie.id)}>Mark Watched</button>
    </li>
  );
}
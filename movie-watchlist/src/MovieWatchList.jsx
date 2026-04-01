import { useState } from "react";
import MovieList from "./MovieList";

export default function Practice() {
  let [movies, setMovies] = useState([
    { id: 1, name: "KGF", rating: 9, genre: "Action", watched: false },
    { id: 2, name: "RRR", rating: 8, genre: "Drama", watched: false },
    { id: 3, name: "Inception", rating: 10, genre: "Sci-Fi", watched: false },
    { id: 4, name: "Pushpa", rating: 7, genre: "Action", watched: false },
    { id: 5, name: "Dune", rating: 8, genre: "Sci-Fi", watched: false },
  ]);

  let watchedMovie = (id) => {
    setMovies((prev) =>
      prev.map((movie) => movie.id === id ? { ...movie, watched: true } : movie)
    );
  };

  return <MovieList movies={movies} onWatch={watchedMovie} />;
}
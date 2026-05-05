import axios from 'axios';
import './MovieSearch.css';
import { useState } from "react";

export default function MovieSearch() {
    const [movie, setMovie] = useState("");
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function getMovies() {
        setLoading(true);
        setError("");

        try {
            const URL = `https://www.omdbapi.com/?s=${movie}&apikey=${import.meta.env.VITE_API_KEY}`;
            const res = await axios.get(URL);

            if (!res.data.Search) {
                setError("Movie not found!");
                setMovieData([]);
                setLoading(false);
                return;
            }

            setMovieData(res.data.Search);
            setMovie("");
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setLoading(false);  
        }
    }

    return (
        <div className="container">
            <h1 className="heading">CineSearch 🎬</h1>
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Enter movie name..."
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                />
                <button className="search-btn" onClick={getMovies}>
                    Search Movie
                </button>
            </div>

            <div className="movies-container">
                {movieData.map((movie) => (
                    <div className="movie-card" key={movie.imdbID}>
                        <img
                            src={movie.Poster}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="no-image" style={{ display: 'none' }}>No Image</div>
                        <div className="movie-data">
                            <p className="title">{movie.Title || "No title available"}</p>
                            <p className="year">Year: {movie.Year || "Unknown"}</p>
                            <p className="type">Type: {movie.Type || "Unknown"}</p>
                        </div>
                    </div>
                ))}
            </div>

            {loading && <p className="loading">Searching...</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
}
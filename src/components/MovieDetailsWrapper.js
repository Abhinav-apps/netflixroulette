import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetails from './Movies/MovieDetails';
import { useParams } from 'react-router-dom'; // Import useParams hook

function MovieDetailsWrapper() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams(); // Get the movieId from the URL params

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movieId) {
        try {
          const response = await axios.get(`http://localhost:4000/movies/${movieId}`);
          setMovie(response.data); // Set the movie data, not just the response
        } catch (error) {
          console.error('Error fetching movie details:', error);
          setMovie(null);
        }
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <MovieDetails movieInfo={movie} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetailsWrapper;

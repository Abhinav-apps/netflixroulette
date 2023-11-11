import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from './counter';
import SearchForm from './searchform';
import '../index.css';
import '../components/Header/header.css';
import MoviesList from './Movies/MovieList';
import SortAndGenreControl from './SortAndGenreControl/SortAndGenreControl';
import Dialog from './Dialog'; // Import the Dialog component
import MovieForm from './MovieForm'; // Import the MovieForm component
import 'font-awesome/css/font-awesome.min.css';
import MovieDetails from '../components/Movies/MovieDetails'; 


function MovieListPage() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState('releaseDate');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const params = {
          search: searchQuery,
          offset: 0, // Add the offset parameter if needed
          limit: 10, // Add the limit parameter if needed
          sortBy: currentSort,
          filter: selectedGenre,
        };
        const response = await axios.get('http://localhost:4000/movies', {
          params,
          signal,
        });
        console.log('params:', params);
        console.log('response:', response);
    
        setMovies(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [searchQuery, currentSort, selectedGenre]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleMovieFormSubmit = (data) => {
    closeDialog();
    alert(`Submitting data: ${JSON.stringify(data)}`);
    // Add logic to send the data to the backend
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="div-container">
      <button className="add-movie-button" onClick={openDialog}>
        Add Movie
      </button>
      {isDialogOpen && (
        <Dialog title="ADD MOVIE" onClose={closeDialog}>
          <MovieForm onSubmit={(data) => handleMovieFormSubmit(data)} />
        </Dialog>
      )}
      <Counter initialValue={10} />
      <SearchForm initialSearchQuery="What do you want to watch?" onSearch={handleSearch} />
      <SortAndGenreControl
        genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime', 'Action']}
        selectedGenre={selectedGenre}
        onSelect={setSelectedGenre}
        currentSort={currentSort}
        onSortChange={setCurrentSort}
      />
      <br />
      {selectedMovie ? (
        <MovieDetails movieInfo={selectedMovie} />
      ) : (
        <MoviesList
          searchQuery={searchQuery}
          selectedGenre={selectedGenre}
          currentSort={currentSort}
          onMovieSelect={handleMovieSelect}
          movies={movies}
        />
      )}
      <br />
    </div>
  );
}

export default MovieListPage;

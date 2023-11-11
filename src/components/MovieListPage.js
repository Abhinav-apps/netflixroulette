import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from './counter';
import SearchForm from './searchform';
import '../index.css';
import '../components/Header/header.css';
import MoviesList from './Movies/MovieList';
import SortAndGenreControl from './SortAndGenreControl/SortAndGenreControl';
import Dialog from './Dialog';
import MovieForm from './MovieForm';
import 'font-awesome/css/font-awesome.min.css';
import MovieDetails from '../components/Movies/MovieDetails';


function MovieListPage() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState('releaseDate');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 12;
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    //console.log('use effect triggered');
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const params = {
          search: searchQuery,
          searchBy: searchQuery ? 'title' : 'genres',
          offset: offset,
          limit: limit,
          sortBy: currentSort,
          sortOrder: 'desc',
          filter: searchQuery ? null : selectedGenre,
        };
        const response = await axios.get('http://localhost:4000/movies', {
          params,
          signal,
        });
        //console.log('params:', params);
        //console.log('response:', response);
    
        setMovies(response.data.data);
        setTotalAmount(response.data.totalAmount);
        //console.log('totalAmount' + totalAmount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [searchQuery, currentSort, selectedGenre, offset]);

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
    //console.log('Search button clicked:', query);
    setSearchQuery(query);
    setSelectedGenre(null);
    setOffset(0);
  };

  const handleGenreChange = (query) => {
    //console.log('genre changed to:', query);
    setSearchQuery(null);
    setSelectedGenre(query === 'All' ? null : query);
    setOffset(0);
  };

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const handlePrevPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  const currentPage = Math.floor(offset / limit) + 1;
  //console.log( 'totalAmount: '+ totalAmount);
  const totalPages = Math.ceil(totalAmount / limit);
  //console.log('totalPages: '+ totalPages);

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
        onSelect={handleGenreChange}
        currentSort={currentSort}
        onSortChange={setCurrentSort}
      />
      <br />
      {selectedMovie ? (
        <MovieDetails movieInfo={selectedMovie} />
      ) : (
        <>
          <MoviesList
            searchQuery={searchQuery}
            selectedGenre={selectedGenre}
            currentSort={currentSort}
            onMovieSelect={handleMovieSelect}
            movies={movies}
          />
          <div>
            <button onClick={handlePrevPage} disabled={offset === 0}>
              Previous Page
            </button>
            <span>
            &nbsp;&nbsp;Page {currentPage} of {totalPages}&nbsp;&nbsp;
              </span>
            <button onClick={handleNextPage}>&nbsp;&nbsp;&nbsp;Next Page&nbsp;&nbsp;&nbsp;</button>
          </div>
        </>
      )}
      <br />
    </div>
  );
}

export default MovieListPage;

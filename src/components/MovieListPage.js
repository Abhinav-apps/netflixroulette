import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom'; 
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
import { useParams } from 'react-router-dom';
import MovieDetails from './Movies/MovieDetails';

function MovieListPage() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentSort, setCurrentSort] = useState('releaseDate');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 7;
  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [showModal, setShowModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieIdParam } = useParams(); // Get the movieId from the URL params

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movieIdParam) {
        try {
          const response = await axios.get(`http://localhost:4000/movies/${movieIdParam}`);
          setMovieInfo(response.data); 
          setShowModal(true);
        } catch (error) {
          console.error('Error fetching movie details:', error);
          setMovieInfo(null);
        }
      }
    };

    fetchMovieDetails();
  }, [movieIdParam]);
  
    // Function to get initial values from URL parameters
    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      setSearchQuery(params.get('query') || '');
      setSelectedGenre(params.get('genre') || '');
      setCurrentSort(params.get('sortBy') || 'releaseDate'); // Ensure consistent casing
      setOffset(parseInt(params.get('offset')) || 0);
    }, [searchParams]);

    // Function to update URL parameters when state changes
useEffect(() => {
  const params = new URLSearchParams();
  if (searchQuery) params.set('query', searchQuery);
  if (selectedGenre) params.set('genre', selectedGenre);
  if (currentSort) params.set('sortBy', currentSort);
  params.set('offset', offset.toString()); // Include offset in URL params

  navigate(`/?${params.toString()}`);
}, [searchQuery, selectedGenre, currentSort, offset, navigate]);

  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const params = {
            search: searchQuery,
            searchBy: searchQuery ? 'title' : 'genres',
            offset: offset, // Use the updated offset from state
            limit: limit,
            sortBy: currentSort,
            sortOrder: 'desc',
            filter: searchQuery ? null : selectedGenre,
          };
          const response = await axios.get('http://localhost:4000/movies', { params });
    
          setMovies(response.data.data);
          setTotalAmount(response.data.totalAmount);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [searchQuery, currentSort, selectedGenre, offset, limit]);
  

  const handleMovieSelect = (movie) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    currentSearchParams.set('movieId', movie.id);
    //navigate(`?${currentSearchParams.toString()}`);
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
    setSelectedGenre(null);
    setOffset(0);
  };

  const handleGenreChange = (query) => {
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
   
  const toggleModal = () => {
    setShowModal(false);
  }

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalAmount / limit);

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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <MovieDetails movieInfo={movieInfo} />
          </div>
        </div>
      )}
      {selectedMovie ? (
        <Link to={`/${selectedMovie.id}`}>View Movie Details</Link> // Using Link from react-router-dom
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

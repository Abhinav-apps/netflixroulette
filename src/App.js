import React, { useState } from 'react';
import Counter from './components/counter';
import SearchForm from './components/searchform';
import './index.css';
import './components/Header/header.css';
import MoviesList from './components/Movies/MovieList';
import SortAndGenreControl from './components/SortAndGenreControl/SortAndGenreControl';
import Dialog from './components/Dialog'; // Import the Dialog component
import MovieForm from './components/MovieForm'; // Import the MovieForm component

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState('releaseDate');

  const [movieData, setMovieData] = useState(null); // Add state to manage movie data

  const handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  const handleMovieFormSubmit = (data) => {
    alert(`Submiting data: ${data}`);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    alert(`Selected genre: ${genre}`);
  };

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption);
    alert(`Sorted By: ${sortOption}`);
  };

  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {isDialogOpen && (
        <Dialog title="ADD MOVIE" onClose={closeDialog}>
          <MovieForm initialMovie={movieData} onSubmit={(data) => handleMovieFormSubmit(data)} />
        </Dialog>
      )}     
     {!isDialogOpen && (
      <div className="div-container">
      <button onClick={openDialog}>Add Movie</button>
     <Counter initialValue={10} />
     <SearchForm initialSearchQuery="What do you want to watch?" onSearch={handleSearch} />
     <SortAndGenreControl
       genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
       selectedGenre={selectedGenre}
       onSelect={handleGenreSelect}
       currentSort={currentSort}
       onSortChange={handleSortChange}
     />
     <br />
     <MoviesList onMovieEdit={openDialog} /> {/* Pass the openDialog function to the MoviesList */}
     <br />
   </div>
    )}
    </>
  );
}

export default App;
import React, { useState } from 'react';
import Counter from './components/counter';
import SearchForm from './components/searchform';
import './index.css';
import './components/Header/header.css';
import MoviesList from './components/Movies/MovieList';
import SortAndGenreControl from './components/SortAndGenreControl/SortAndGenreControl';

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState('releaseDate');

  const handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    alert(`Selected genre: ${genre}`);
  };

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption);
    alert(`Sorted By: ${sortOption}`);
  };

  return (
    <div className="div-container">
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
      <MoviesList />
      <br />
    </div>
  );
}

export default App;
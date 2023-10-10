import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';
import SearchForm from './components/searchform';
import GenreSelect from './components/genreselect';

function App() {
  
  const genres = ['All', 'Action', 'Romance', 'Horror' , 'Adventure', 'Comedy', 'Drama', 'Sci-Fi'];
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    alert(`Performing a search for selected genre: ${genre}`);
  };

  const handleSearch = (query) => {
    // Replace this with your desired search logic
    alert(`Performing a search for your movie: ${query}`);
  };

  return (
    <div className="App">
      <Counter initialValue={10} />
      <h1>FIND YOUR MOVIE</h1>
      <SearchForm initialQuery="Goalmaal 4" onSearch={handleSearch} />
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
    </div>
    
  );
}

export default App;
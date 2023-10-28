import React from 'react';

function GenreSelect({ genres, selectedGenre, onSelect }) {
  return (
    <div className="genre-select">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`genre-button ${genre === selectedGenre ? 'selected' : ''}`}
        >
          {genre}
        </button>
      ))}
      
    </div>
  );
}

export default GenreSelect
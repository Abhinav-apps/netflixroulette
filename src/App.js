import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from './components/MovieListPage';
import MovieDetailsWrapper from './components/MovieDetailsWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/:movieId" element={<MovieDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
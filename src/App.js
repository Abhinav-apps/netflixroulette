import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from './components/MovieListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/:movieIdParam" element={<MovieListPage />} />
        <Route path="/new" element={<MovieListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
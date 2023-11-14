import React from 'react';
import MovieForm from '../components/MovieForm'; // Update with the actual path

const initialMovieData = {
  name: 'Sample Movie',
  year: '2022',
  pictureURL: 'https://example.com/sample-movie.jpg',
  runtime: '120 minutes',
  overview: 'A sample movie for testing.',
};

export default {
  title: 'EditMovie',
};

export const EditMovie = () => (
  <MovieForm initialMovie={initialMovieData} onSubmit={(data) => console.log('Form Data:', data)} />
);
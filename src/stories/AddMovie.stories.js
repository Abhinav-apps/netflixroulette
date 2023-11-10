import React from 'react';
import { addDecorator } from '@storybook/react';
import MovieForm from '../components/MovieForm'; // Update with the actual path

export default {
  title: 'AddMovie',
};

export const AddMovie = () => (
  <MovieForm onSubmit={(data) => console.log('Form Data:', data)} />
);
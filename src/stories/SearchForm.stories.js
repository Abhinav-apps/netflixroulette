import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchForm from '../components/searchform'; // Import your SearchForm component

export default {
  title: 'SearchForm',
  component: SearchForm,
};

export const Default = () => (
  <SearchForm
    onSearch={action('onSearch')}
  />
);

export const WithInitialQuery = () => (
  <SearchForm
    initialQuery="Initial Query Value"
    onSearch={action('onSearch')}
  />
);

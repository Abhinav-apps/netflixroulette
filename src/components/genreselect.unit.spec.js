import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreSelect from './genreselect';

describe('GenreSelect Component', () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror'];

  it('should render all genres passed in props', () => {
    const { getByText } = render(<GenreSelect genres={genres} />);
    genres.forEach((genre) => {
      expect(getByText(genre)).toBeInTheDocument();
    });
  });

  it('should highlight a selected genre passed in props', () => {
    const { getByText } = render(<GenreSelect genres={genres} selectedGenre="Comedy" />);
    const comedyButton = getByText('Comedy');
    
    expect(comedyButton).toHaveClass('selected');
  });

  it('should call the "onSelect" callback and pass the correct genre in arguments after a click event on a genre button', () => {
    const mockOnSelect = jest.fn();
    const { getByText } = render(
      <GenreSelect genres={genres} selectedGenre="Action" onSelect={mockOnSelect} />
    );
    const comedyButton = getByText('Comedy');
    
    fireEvent.click(comedyButton);
    
    expect(mockOnSelect).toHaveBeenCalledWith('Comedy');
  });
});

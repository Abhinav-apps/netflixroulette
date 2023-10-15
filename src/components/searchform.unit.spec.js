import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './searchform';

describe('SearchForm Component', () => {
  it('should render an input with the value equal to initial value passed in props', () => {
    const { getByPlaceholderText } = render(<SearchForm initialQuery="Initial Value" />);
    const inputElement = getByPlaceholderText('What do you want to watch...');
    expect(inputElement.value).toBe('Initial Value');
  });

  it('should call the "onChange" prop with proper value after typing and clicking "Search"', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchForm onSearch={mockOnChange} />);
    const inputElement = getByPlaceholderText('What do you want to watch...');
    const searchButton = getByText('Search');

    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    fireEvent.click(searchButton);

    expect(mockOnChange).toHaveBeenCalledWith('New Value');
  });

  it('should call the "onChange" prop with proper value after typing and pressing Enter key', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(<SearchForm onSearch={mockOnChange} />);
    const inputElement = getByPlaceholderText('What do you want to watch...');

    fireEvent.change(inputElement, { target: { value: 'Another Value' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    expect(mockOnChange).toHaveBeenCalledWith('Another Value');
  });
});

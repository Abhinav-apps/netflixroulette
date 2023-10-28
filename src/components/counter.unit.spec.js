import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('should render the initial value provided in props', () => {
    const { getByText } = render(<Counter initialValue={5} />);
    expect(getByText('Current count: 5')).toBeInTheDocument();
  });

  it('should increment the displayed value when the "Increment count" button is clicked', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const incrementButton = getByText('Increment count');

    fireEvent.click(incrementButton);

    expect(getByText('Current count: 1')).toBeInTheDocument();
  });

  it('should decrement the displayed value when the "Decrement count" button is clicked', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const decrementButton = getByText('Decrement count');

    fireEvent.click(decrementButton);

    expect(getByText('Current count: -1')).toBeInTheDocument();
  });
});
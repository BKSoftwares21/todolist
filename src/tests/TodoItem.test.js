import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('<TodoItem /> tests', () => {
  it('todo item should be crossed out after completing', async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    const checkbox = screen.getByTestId('checkbox-1');
    userEvent.click(checkbox);

    await waitFor(() => {
      expect(screen.getByText(/Eat breakfast/i)).toHaveStyle('text-decoration: line-through');
    });
  });
});

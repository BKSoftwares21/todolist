import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import fetchMock from 'jest-fetch-mock';

describe('<App /> tests', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should add a todo item', async () => {
    fetchMock.once(
      JSON.stringify({
        userId: 3,
        id: Math.floor(Math.random() * 100) + 1,
        title: 'Do math homework',
        completed: false,
      })
    );

    render(<App />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    userEvent.type(screen.getByRole('textbox'), 'Do math homework');
    userEvent.click(screen.getByText(/Add new todo/i));
    await waitFor(() => expect(screen.queryByText(/saving/i)).not.toBeInTheDocument());
    expect(screen.getByText(/Do math homework/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';


fetchMock.enableMocks();

describe('<App /> tests', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should add a todo item', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        userId: 3,
        id: Math.floor(Math.random() * 100) + 1,
        title: 'Do math homework',
        completed: false,
      })
    );

    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    }, { timeout: 3000 }); // Increase timeout to 3 seconds

    userEvent.type(screen.getByRole('textbox'), 'Do math homework');
    userEvent.click(screen.getByText(/Add new todo/i));
    await waitFor(() => {
      expect(screen.queryByText(/saving/i)).not.toBeInTheDocument();
    }, { timeout: 3000 }); // Increase timeout to 3 seconds

    expect(screen.getByText(/Do math homework/i)).toBeInTheDocument();
  });

  it('should remove a todo item', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        userId: 3,
        id: 3,
        title: 'Take out the trash',
        completed: false,
      })
    );

    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    }, { timeout: 3000 }); // increased the timeout to 3 seconds

    // Simulate adding a todo item
    userEvent.type(screen.getByRole('textbox'), 'Take out the trash');
    userEvent.click(screen.getByText(/Add new todo/i));
    await waitFor(() => {
      expect(screen.queryByText(/saving/i)).not.toBeInTheDocument();
    }, { timeout: 3000 }); // Increase the timeout to 3 seconds

    expect(screen.getByText(/Take out the trash/i)).toBeInTheDocument();

    // Click the remove button (assuming it has a data-testid of 'remove-btn-{id}')
    userEvent.click(screen.getByTestId('remove-btn-3'));

    // Verify that the todo item is no longer in the document
    await waitFor(() => {
      expect(screen.queryByText(/Take out the trash/i)).not.toBeInTheDocument();
    }, { timeout: 3000 }); // Increase timeout to 3 seconds
  });
});

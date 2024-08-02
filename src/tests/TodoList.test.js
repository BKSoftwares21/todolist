import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mockData from '../components/mockData';
import TodoList from '../components/TodoList';

describe('todo list test', () => {
  it('should show title of todos', () => {
    render(<TodoList todos={mockData} />);
    mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
  });
});
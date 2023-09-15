import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Blog from './Blog';

test('renders article title and author initially', () => {
  const blog = {
    title: 'test article',
    author: 'Tim',
    url: 'link.com',
    likes: 1,
  };

  render(<Blog blog={blog} />);

  screen.getByText('test article');
  screen.getByText('By Tim');
});

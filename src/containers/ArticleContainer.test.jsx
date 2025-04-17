import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleContainer from '../containers/ArticleContainer';
import useFetchMostPopArticles from '../hooks/useFetchMostPopArticles';

jest.mock('../hooks/useFetchMostPopArticles');

describe('ArticleContainer', () => {
  it('shows loading state initially', () => {
    useFetchMostPopArticles.mockReturnValue({
      articles: [],
      loading: true,
      error: null
    });

    render(<ArticleContainer />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('shows error message on error', () => {
    useFetchMostPopArticles.mockReturnValue({
      articles: [],
      loading: false,
      error: true
    });

    render(<ArticleContainer />);
    expect(screen.getByText(/error loading articles/i)).toBeInTheDocument();
  });

  it('renders article list on success', () => {
    useFetchMostPopArticles.mockReturnValue({
      articles: [{ id: 1, title: 'Sample Article' }],
      loading: false,
      error: null
    });

    render(<ArticleContainer />);
    expect(screen.getByText(/sample article/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetail from '../components/ArticleDetail';

describe('ArticleDetail Component', () => {
  const article = {
    title: 'Sample Article Title',
    abstract: 'This is a sample abstract for the article.',
    byline: 'By Author Name',
    published_date: '2023-01-01',
    url: 'https://www.nytimes.com/sample-article'
  };

  test('renders article title', () => {
    render(<ArticleDetail article={article} />);
    const titleElement = screen.getByText(/Sample Article Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders article abstract', () => {
    render(<ArticleDetail article={article} />);
    const abstractElement = screen.getByText(/This is a sample abstract for the article./i);
    expect(abstractElement).toBeInTheDocument();
  });

  test('renders article published date', () => {
    render(<ArticleDetail article={article} />);
    const dateElement = screen.getByText(/January 1, 2023/i);
    expect(dateElement).toBeInTheDocument();
  });

  test('renders article link', () => {
    render(<ArticleDetail article={article} />);
    const linkElement = screen.getByRole('link', { name: /Read more/i });
    expect(linkElement).toHaveAttribute('href', article.url);
  });
});
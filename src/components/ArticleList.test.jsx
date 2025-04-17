import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from '../components/ArticleList'; // Adjust the import path as needed

describe('ArticleList', () => {
  const mockArticles = [
    { id: 1, title: 'Sample Article 1' },
    { id: 2, title: 'Another Great Article' },
    { id: 3, title: 'The Latest News' },
  ];

  const mockOnSelect = jest.fn();

  test('renders the heading', () => {
    render(<ArticleList articles={mockArticles} onSelect={mockOnSelect} />);
    expect(screen.getByText('Most Popular Articles')).toBeInTheDocument();
  });

  test('renders the correct number of list items', () => {
    render(<ArticleList articles={mockArticles} onSelect={mockOnSelect} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockArticles.length);
  });

  test('renders the article titles within buttons', () => {
    render(<ArticleList articles={mockArticles} onSelect={mockOnSelect} />);
    mockArticles.forEach(article => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: article.title })).toBeInTheDocument();
    });
  });

  test('calls onSelect with the correct article when a button is clicked', () => {
    render(<ArticleList articles={mockArticles} onSelect={mockOnSelect} />);
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(mockArticles[0]);

    fireEvent.click(buttons[1]);
    expect(mockOnSelect).toHaveBeenCalledTimes(2);
    expect(mockOnSelect).toHaveBeenCalledWith(mockArticles[1]);
  });

  test('renders nothing if articles prop is an empty array', () => {
    render(<ArticleList articles={[]} onSelect={mockOnSelect} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });

  test('renders nothing if articles prop is null or undefined', () => {
    render(<ArticleList articles={null} onSelect={mockOnSelect} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);

    render(<ArticleList articles={undefined} onSelect={mockOnSelect} />);
    const listItemsUndefined = screen.queryAllByRole('listitem');
    expect(listItemsUndefined).toHaveLength(0);
  });
});
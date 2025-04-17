import React, { useState } from 'react';

import ArticleList from '../components/ArticleList';
import ArticleDetail from '../components/ArticleDetail';
import useFetchMostPopArticles from '../hooks/useFetchMostPopArticles';

const ArticleContainer = () => {
  const { articles, loading, error } = useFetchMostPopArticles();
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading articles.</p>;

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ArticleList articles={articles} onSelect={setSelectedArticle} />
      {selectedArticle && (
  <div style={{ position: 'sticky', top: '1rem', alignSelf: 'flex-start' }}>
    <ArticleDetail article={selectedArticle} />
  </div>
)}

    </div>
  );
};

export default ArticleContainer;

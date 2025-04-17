import React from 'react';

const ArticleList = ({ articles, onSelect }) => {
    {console.log(articles,'articles')}
  return (
    <div>
      <h2>Most Popular Articles</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles?.length > 0 && articles.map(article => (
          <li key={article.id} style={{ marginBottom: '1rem' }}>
            <button onClick={() => onSelect(article)} style={{ cursor: 'pointer' }}>
              {article.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;

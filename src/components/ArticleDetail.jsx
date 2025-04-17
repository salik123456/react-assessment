import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <h2>{article.title}</h2>
      <p><strong>By:</strong> {article.byline}</p>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetail;

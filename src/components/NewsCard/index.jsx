import React from 'react';

import './index.scss';

const NewsCard = ({ author, title, description, urlToImage, publishedAt }) => {
  return (
    <div className="news-card-container">
      <div className="news-card-header">
        <img className="news-img" src={urlToImage} alt={author} />
      </div>
      <div className="news-content">
        <div className="news-card-body">
          <p className="news-title">{title}</p>
          <p className="news-description">{description}</p>
        </div>
        <div className="news-footer">
          <p className="date-published">
            {new Date(publishedAt).toLocaleDateString('en-US')}
          </p>
          <p className="author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

import React from "react";

const ArticleCard = ({ link, thumbnail, title }) => {
  return (
    <div className="article-content">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img className="article-image" src={thumbnail} />
      </a>
      <h4 className="article-title">{title}</h4>
    </div>
  );
};

export default ArticleCard;

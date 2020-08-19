import React from "react";

const ArticleCard = ({ thumbnail, title }) => {
  return (
    <div className="article-content">
      <img className="article-image" src={thumbnail} />
      <h4 className="article-title">{title}</h4>
    </div>
  );
};

export default ArticleCard;

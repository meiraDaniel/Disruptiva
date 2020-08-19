import React, { useEffect, useState } from "react";

import api from "../../Services/callApis";

import "./Posts.scss";
import ArticleCard from "./ArticleCard";

const Posts = () => {
  const [articles, setArticles] = useState([]);
  const [activeArticles, setActiveArticles] = useState([]);
  const [numberVisibleArticles, setNumberVisibleArticles] = useState(4);

  const getPosts = async () => {
    const data = await api.getPostsMedium();
    setArticles(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setActiveArticles(articles.slice(0, numberVisibleArticles));
  }, [articles, numberVisibleArticles]);

  return (
    <>
      <div className="articles-container">
        {activeArticles.map((article, index) => {
          return (
            <div key={index} className="article-box">
              <ArticleCard
                thumbnail={article.thumbnail}
                title={article.title}
              />
            </div>
          );
        })}
      </div>
      {articles.length > numberVisibleArticles && (
        <button
          className="articles-button"
          onClick={() => setNumberVisibleArticles(numberVisibleArticles + 2)}
        >
          More
        </button>
      )}
    </>
  );
};

export default Posts;

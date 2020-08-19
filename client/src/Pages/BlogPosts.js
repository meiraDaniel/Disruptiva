import React from "react";

import Posts from "../Components/Posts/Posts";

import "./BlogPosts.scss";

export default function Home() {
  return (
    <div className="blog-main">
      <div className="posts-container">
        <Posts />
      </div>
    </div>
  );
}

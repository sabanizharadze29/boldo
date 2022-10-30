import React from "react";
import "./latestnews.css";
import { latestData } from "../../../../data";
import BlogCards from "../../../Hompage/Blog/BlogCards";

const LatestNews = () => {
  return (
    <div className="container-fluid latest-news">
      <div className="container latest-news-container container-blog">
        <h1 className="latest-title secondary-font">Latest news</h1>
        <div className="blog-cards-wrapper latst-cards-wrapper">
          <BlogCards data={latestData} />
        </div>
        <button className="blog-button latest-button">Load more</button>
      </div>
    </div>
  );
};

export default LatestNews;

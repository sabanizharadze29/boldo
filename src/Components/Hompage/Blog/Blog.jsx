import React from "react";
import { blogCardsData } from "../../../data";

import "./blog.css";
import BlogCards from "./BlogCards";
const Blog = () => {
  return (
    <div className="container-fluid">
      <div className="container container-blog">
        <p className="text-center">Our Blog</p>
        <h1 className="secondary-font text-center">
          Value proposition accelerator product management venture
        </h1>
        <div className="blog-cards-wrapper">
          <BlogCards data={blogCardsData} />
        </div>
        <button className="blog-button">Load more</button>
      </div>
    </div>
  );
};

export default Blog;

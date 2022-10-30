import React from "react";
import "./serviceBlog.css";
import ServiceBlogImg from "../../../../assets/serviceBlog.png";
import BlogAvatar from "../../../../assets/blogAvatar1.png";
const ServiceBlog = () => {
  return (
    <div className="container-fluid service-blog">
      <div className="container">
        <p className="service-blog-title-sl text-center">Blog</p>
        <h1 className="secondary-font text-center service-blog-title-lg">
          Thoughts and words
        </h1>
        <div className="service-blog-card">
          <img src={ServiceBlogImg} alt="" />
          <div className="service-blog-card-body">
            <p className="service-blog-card-date">
              Category <span>November 22, 2021</span>
            </p>
            <h1 className="secondary-font service-blog-card-title">
              Pitch termsheet backing validation focus release.
            </h1>
            <div className="service-blog-card-footer">
              <img src={BlogAvatar} alt="" />
              <p className="service-blog-card-footer-name">Chandler Bing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlog;

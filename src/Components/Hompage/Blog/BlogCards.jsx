import React from "react";

const BlogCards = ({ data }) => {
  return (
    <>
      {data.map((blog, index) => {
        const { img, category, date, avatar, name, text } = blog;
        return (
          <div key={index} className="blog-card">
            <img src={img} alt="" />
            <h4 className="blog-card-category">
              {category} <span>{date}</span>
            </h4>
            <p className="blog-card-text">{text}</p>
            <div className="blog-card-footer">
              <img src={avatar} alt="" />
              <h3 className="blog-autor-name">{name}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCards;

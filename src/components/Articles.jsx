import React from "react";
import articles from "../assets/grilled-tomatoes-1-846x846 1.jpg";
const Articles = () => {
  return (
    <>
      <div className="container">
        <div className="articles">
          <img src={articles} alt="articles" />
          <h2>Grilled Tomatoes at Home</h2>
          <p>
            Grilled Tomatoes at Home PLorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard... Read More
          </p>
          <button className="read-more">Read more</button>
        </div>
      </div>
    </>
  );
};

export default Articles;

import React from "react";

const Articles = ({ image, heading }) => {
  return (
    <>
      <div className="container">
        <div className="articles">
          <img src={image} alt="articles" />
          <h2>{heading}</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard... Read More
          </p>
          <button className="read-more">Read more</button>
        </div>
      </div>
    </>
  );
};

export default Articles;

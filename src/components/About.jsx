import React from "react";
import aboutusImage from "../assets/pharmasict-serving-customer-drug-store 1.jpg";
const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row about-us">
          <div className="col-sm-12 col-md-12 col-lg-6 image-container">
            <img src={aboutusImage} alt="aboutus" className="about-image" />
          </div>
          <div className="about-right-content col-sm-12 col-md-12 col-lg-6 ">
            <h1 className="heading-about">About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. has survived
              not only five centuries.
            </p>
            <button className="read-more">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

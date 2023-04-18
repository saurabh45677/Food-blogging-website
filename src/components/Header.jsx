import React from "react";
import foodtruck from "../assets/Screenshot_669 1.jpg";
import pizzaimage from "../assets/Rectangle 400.jpg";
import vector from "../assets/vector.png";

const Header = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row header">
            <div className="col-sm-12 col-md-12 col-lg-6 left-part order-sm-1 order-md-1 order-lg-0">
              <img className="left-image" src={foodtruck} alt="food-truck" />
              <div className="header-content">
                <h1>
                  Discover the
                  <br /> <span className="best">Best</span> Food <br /> and
                  Drinks
                </h1>
                <p>
                  Naturally made Healthcare Products for the better care &
                  support of your body
                </p>
                <button className="explore-now">Explore Now!</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 right-part order-sm-0 order-md-0 order-lg-1">
              <img className="pizzaimage" src={pizzaimage} alt="pizzaimage" />
              <button className="get-touch">Get In Touch</button>
            </div>

            <img className="vector" src={vector} alt="vector" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

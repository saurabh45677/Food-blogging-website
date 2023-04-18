import React from "react";
import foodTruck from "../assets/truck-img.png";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className=" container">
        <div className="row footer-content">
          <div className="footer-image col-sm-12 col-md-12 col-lg-3">
            <img src={foodTruck} alt="foodtruck" />
          </div>

          <div className="contact-details col-sm-12 col-md-12 col-lg-3">
            <div className="details-conatiner">
              <h4>Contact Us</h4>
              <p>
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </p>
              <p>example2020@gmail.com</p>
              <p>(904) 443-0343</p>
            </div>
          </div>
          <div className="footer-menu col-sm-12 col-md-12 col-lg-3">
            <h3>More</h3>
            <a href="/">About Us</a>
            <a href="/">Products</a>
            <a href="/">Career</a>
            <a href="/">Contact Us</a>
          </div>
          <div className="social-media-links col-sm-12 col-md-12 col-lg-3">
            <h2>Social Links</h2>
            <div className="social-media-icons">
              <BsInstagram />
              <BsTwitter />
              <FaFacebookF />
            </div>
            <p className="copyright-para">© 2022 Food Truck Example</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

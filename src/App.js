import "./App.css";
import About from "./components/About";
import Articles from "./components/Articles";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "./components/Footer";
import article from "../src/assets/grilled-tomatoes-1-846x846 1.jpg";
import article1 from "../src/assets/article1.jpg";
import article2 from "../src/assets/article2.jpg";
import article3 from "../src/assets/article3.jpg";
import article4 from "../src/assets/article4.jpg";
import article5 from "../src/assets/article5.jpg";
import { useEffect, useState } from "react";

function App() {
  const [sliderCount, setSliderCount] = useState(1);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: true,
        },
      },
    ],
  };

  const articlesData = [
    {
      heading: "Grilled  Tomatoes at Home",
      image: article,
    },
    {
      heading: "Snacks for Travel",
      image: article1,
    },
    {
      heading: "Post-workout Recipes",
      image: article2,
    },
    {
      heading: "How To Grill Corn",
      image: article3,
    },
    {
      heading: "Crunchwrap Supreme",
      image: article4,
    },
    {
      heading: "Broccoli Cheese Soup",
      image: article5,
    },
  ];

  useEffect(() => {
    document.querySelector(".slick-next").addEventListener("click", () => {
      sliderCount === 1 ? setSliderCount(2) : setSliderCount(1);
    });

    document
      .querySelector(".slick-prev")
      .addEventListener("click", () =>
        sliderCount === 1 ? setSliderCount(2) : setSliderCount(1)
      );
  }, [sliderCount]);

  return (
    <div className="App">
      <>
        <Header />
        <About />
        <section className="carousel-section content">
          <div className="container">
            <h1 className="articles-heading">Latest Articles</h1>
            <Slider {...sliderSettings}>
              {articlesData.map((el, index) => {
                return (
                  <Articles image={el.image} heading={el.heading} key={index} />
                );
              })}
            </Slider>
            <p className="slider-info">{sliderCount}/2</p>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
}

export default App;

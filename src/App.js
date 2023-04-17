import "./App.css";
import About from "./components/About";
import Articles from "./components/Articles";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "./components/Footer";

function App() {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
  };

  return (
    <div className="App">
      <>
        <Header />
        <About />
        <h1 className="articles-heading">Latest Articles</h1>
        <section className="carousel-section content">
          <div className="container">
            <Slider {...sliderSettings}>
              <Articles />
              <Articles />
              <Articles />
              <Articles />
              <Articles />
              <Articles />
            </Slider>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
}

export default App;

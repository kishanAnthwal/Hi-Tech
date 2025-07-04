
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const Hero = () => {
  const images = [
    "/images/slider_1.webp",
    "/images/slider_2 (1).webp",
    "/images/slider_03.webp",
    "/images/slider_4 (1).webp",
    "/images/slider_005.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="hero-container">
      <div className="hero-text-overlay">
        <h1 className="hero-top-row">
          <strong>We have a mission to</strong> Make India आत्मनिर्भर
        </h1>
        <div className="flex_box hero-bottom-row justify_between align_center">
          <div className="hero-call-now">Call Now @ 9212-577-577</div>
          <div className="hero-call-message">
            A call may take you at the right place
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="hero-slide">
            <img src={src} alt={`Slide ${idx + 1}`} className="hero-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

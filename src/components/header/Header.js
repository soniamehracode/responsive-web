import "./Header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div>
        <Slider {...settings}>
          <div className="header-container">
            <div className="content">
              <span>{props.title}</span>
              <h1>{props.para}</h1>
              <p>{props.paragraph}</p>
              <a>{props.button}</a>
            </div>
          </div>
          <div className="header-container">
            <div className="content">
              <h3>{props.title}</h3>
              <h1>{props.para}</h1>
              <p>{props.paragraph}</p>
            </div>
          </div>
          <div className="header-container">
            <div className="content">
              <h3>{props.title}</h3>
              <h1>{props.para}</h1>
              <p>{props.paragraph}</p>
            </div>
          </div>
          <div className="header-container">
            <div className="content">
              <h3>{props.title}</h3>
              <h1>{props.para}</h1>
              <p>{props.paragraph}</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;

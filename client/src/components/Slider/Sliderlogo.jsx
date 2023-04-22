import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// ------------------------------------------------SETTINGS-TIME ---------------------------------------------------
const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Sliderlogo(props) {
  const data = props.data;
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <div className="image_container" key={index} style={{ display: "flex", alignItems: "center" }}>
          <Link to={item.path}>
            <img
             
              src={item.img}
              alt="logo"
              width="80%"
              height="100px"
                          />
          </Link>
          </div>
         
        );
      })}
    </Slider>
  );
}
Sliderlogo.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Sliderlogo;

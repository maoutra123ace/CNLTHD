import React from 'react'
import Slider from "react-slick";
import PropTypes from "prop-types";
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Button from '../Button/Button'
// ------------------------------------------------SETTINGS-TIME ---------------------------------------------------
const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
};
//  --------------------------------------------------SLIDER-CONTENT ------------------------------------------------
const Sliders = props => {
    const data = props.data;
    return (
        <div className='hero-slider'>
            <Slider {...settings}>
                {data.map((item, index) => {
                    return (
                        <div className='hero-slider__item' key={index} >
                            <div className='hero-slider__item__info'>
                                <div className='hero-slider__item__info__title'>
                                    <span>{item.title}</span>
                                </div>
                                <div className='hero-slider__item__info__description'>
                                    <span>{item.description}</span>
                                </div>
                                <div className='hero-slider__item__info__btn'>
                                
                                    <Link path={item.path}>
                                        <Button
                                            color='#fff'
                                            icon='cart'
                                            aninmation={true}
                                        >xem chi tiết</Button>
                                    </Link>
                                </div>

                            </div>
                            <div className='hero-slider__item__image'>
                                <img src={item.img} alt="logo" />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>

    )
}
Sliders.propTypes = {
    data: PropTypes.array.isRequired
}
export default Sliders


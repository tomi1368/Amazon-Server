import React from 'react'
import Slider from "react-slick";
import products from '../Home/mocks/Products';
import "./BestsProducts.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };



const BestsProducts = () => {
    let newArray = products.slice(4)
    return (
        <div className='best'>
            <h2>Best Sellers</h2>
            <Slider {...settings}>
                {newArray.map(el=>{
                    return(
                        <div className='best-card'>
                            <img src={el.image} alt={el.title}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default BestsProducts

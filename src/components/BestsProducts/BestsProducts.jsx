import React from 'react'
import Slider from "react-slick";
import "./BestsProducts.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };



const BestsProducts = () => {
    const products = useSelector(state=>state.products)
    /* let newArray = products.ALLproducts.filter(a=>a.rating > 1)
    log(products.ALLproducts) */
    return (
        <div className='best'>
            <h2>Best Sellers</h2>
            <Slider {...settings}>
                {products.ALLproducts.map(el=>{
                    return(
                        <div className='best-card'>
                            <Link to={`/product/find/${el._id}`} >
                            <img src={el.image} alt={el.title}/>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default BestsProducts

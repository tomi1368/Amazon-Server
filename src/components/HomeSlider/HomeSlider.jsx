import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.scss"
import Slider from "react-slick";
import ArrowRight from './presentational/ArrowRight/ArrowRight';
import ArrowLeft from './presentational/ArrowLeft/ArrowLeft';


const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slideToShow:1,
    slidesToScroll:1,
    nextArrow: <ArrowRight/>,
    prevArrow: <ArrowLeft/>
}







const HomeSlider = () => {
    return (
            <Slider {...settings} className='slider'>
                <div className='slide'>
                <img alt="New year, new deals 2022" src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg" className="_cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE" data-a-hires="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"/>
                </div>
                <div>   
                <img alt="Epic Daily Deals, Your holiday head start" src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg" className="_cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE" data-a-hires="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"/>
                </div>
                <div>
                <img alt="Shop Toys and Games" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" className="_cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE" data-a-hires="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"/>
                </div>
                <div>
                <img alt="Shop Computers and Accessories" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" className="_cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE" data-a-hires="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"/>
                </div>
                <div>
                <img alt="Shop the home store" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" className="_cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE" data-a-hires="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"/>
                </div>
                <div>
                <img alt="Shop our Beauty selection" src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" className="_cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE" data-a-hires="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"/>
                </div>
            </Slider>
    )
}

export default HomeSlider

import React from 'react'
import Slider from "react-slick"; 
import "./ProductImgSlider.scss"






const ProductImgSlider = ({info}) => {
    const settings = {
        customPaging: function(i) {
          return (
            <div style={{maxWidth:"200px", width:"50px", height:"50px"}}>
              <img src={info.data.data.imagesSlider[i]} />
            </div>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dragabble:false,
        swipe:false,
        arrow:false,
        vertical:true
      };


    return (
            <Slider {...settings} className='slider-product'> 
                {info.data.data.imagesSlider.map(item=>{
                    return(    
                        <div className='a'>
                            <img src={item} alt="" />
                        </div>
                    )
                })}
            </Slider>
    )
}


export default ProductImgSlider

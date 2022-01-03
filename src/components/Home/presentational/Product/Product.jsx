import React from 'react'
import "./Product.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = ({data}) => {
    return (
        <div className='card-container'>
        <Link to={`/products/${data.id}`} className='card'>
        <div className="card-img">
            <img src={data.image} alt="" />
        </div>
        <h3>{data.title}</h3>
        <h4>{`$${data.price}`}</h4>
        <div className="card-rating">
            {[...Array(data.rating).keys()].map((el,i)=><span key={i}><FontAwesomeIcon icon={faStar} style={{fontSize:"13px", color:"#ffa41c"}}/></span>)}
        </div>
        </Link>
        <button className='card-btn' onClick={()=>console.log("hola")}>Add to Cart</button>
        </div>
    )
}

export default Product

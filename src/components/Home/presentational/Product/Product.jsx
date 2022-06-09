import React from 'react'
import "./Product.scss"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../redux/cartRedux';

const Product = ({data}) => {
    const dispatch = useDispatch()

    const addOneProduct = (data)=>{
        let info = {
            product:{...data,quantity:1},
            quantity:1,
            price:data.price
        }
        dispatch(addProduct(info))
    }

    return (
        <div className='card-container'>
        <Link to={`/product/find/${data._id}`} className='card'>
        <div className="card-img">
            <img src={data.image} alt={data.title} />
        </div>
        <h3>{data.title}</h3>
        <h4>{`$${data.price}`}</h4>
        <div className="card-rating">
            {[...Array(data.rating).keys()].map((el,i)=><span key={i}>⭐</span>)}
        </div>
        </Link>
        <button className='card-btn' onClick={()=>addOneProduct(data)}>Add to Cart</button>
        </div>
    )
}

export default Product

import React from 'react'
import "./Order.scss"


const Order = (info) => {
    console.log(info)
    return (
        <div className='order'>
            <div>
            <div className="order-img">
                <img src={info.image} alt="" />
            </div>
            <div>
                <h3>{info.title}</h3>
                <h4>{info.price}</h4>
            </div>
            </div>
            <div>
                <h4>{new Date(info.createdAt).toDateString()}</h4>
            </div>
        </div>
    )
}

export default Order

import React from 'react'
import Order from './presentational/Order'
import {useSelector} from "react-redux"
import "./Orders.scss"

const Orders = () => {
    const orders = useSelector(state=>state.orders)
    return (
        <div className='orders-container'>
            <h2>Orders</h2>
            { orders.orders.map((elem,i)=>{
                return (<Order info={elem}></Order>)
            } )
}
        </div>
    )
}

export default Orders

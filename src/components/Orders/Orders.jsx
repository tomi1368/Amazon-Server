import React from 'react'
import Order from './presentational/Order'
import {useSelector} from "react-redux"
import "./Orders.scss"

const Orders = () => {
    const user = useSelector(state=>state.user.currentUser)
    const orders = useSelector(state=>state.orders)
    console.log(orders.orders,user)
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

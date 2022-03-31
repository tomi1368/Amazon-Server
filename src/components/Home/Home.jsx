import React from 'react'
import { useSelector } from 'react-redux'
import "./Home.scss"
import Product from './presentational/Product/Product'

const Home = () => {
    const products = useSelector(state=>state.products)
    return (
        <main className='products'>
            {products.ALLproducts.map((el,i)=> <Product data={el} key={i}></Product>)}
        </main>
    )
}

export default Home

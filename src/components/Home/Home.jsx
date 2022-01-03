import React from 'react'
import "./Home.scss"
import products from './mocks/Products'
import Product from './presentational/Product/Product'
const Home = () => {
    return (
        <main className='products'>
            {products.map((el,i)=> <Product data={el} key={i}></Product>)}
        </main>
    )
}

export default Home

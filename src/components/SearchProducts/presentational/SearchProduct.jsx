import React, { useState, useEffect } from "react";
import axios from "axios";
import "../SearchProducts.scss";
import { Link, useParams } from "react-router-dom";

const SearchProduct = ({ filters, time }) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams()


  useEffect(() => {
    const getProducts = async () => {
      try {
        let results = await axios.get( params.id == "all" ? `https://mern-amazon12.herokuapp.com/api/product` : `https://mern-amazon12.herokuapp.com/api/product/${params.id}`);
        setProducts(results.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [params]);

  useEffect(() => {
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            if (Array.isArray(item[key])) {
              return item[key].includes(value);
            } else {
              return item[key] == value;
            }
          })
        )
        );
  }, [filters,products]);

  useEffect(() => {
    if (time === "newest") {
      if ((!filterProducts || filterProducts.length == 0) || Object.keys(filters).length == 0  ) {
        setProducts([...products].sort((a, b) => (new Date(b.createdAt)) - (new Date(a.createdAt))));
      } else {
        setFilterProducts((prev) =>
          [...prev].sort((a, b) => (new Date(b.createdAt)) - (new Date(a.createdAt)))
        );
      }
    } else {
      if ((!filterProducts || filterProducts.length == 0) || Object.keys(filters).length == 0  ){ 
        setProducts([...products].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
      }else{
        setFilterProducts((prev) => [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
      }
    }
  }, [time,filters]);

  return (
    <>
      {((filterProducts != undefined || filterProducts.length != 0) && Object.keys(filters).length != 0 )
        ? filterProducts.map((elem) => {
            return (
              <Link to={`/product/find/${elem._id}`} style={{color:"inherit"}} >
              <div className="search-products__product" >
                <div className="search-products__product__img">
                  <img src={elem.image} alt={elem.title} />
                </div>
                <div>
                  <h3>{elem.title}</h3>
                  {[...Array(elem.rating).keys()].map((el, i) => (
                    <span key={i}>
                      ⭐
                    </span>
                  ))}
                  <h3>{elem.price}</h3>
                  <span>{elem.quantity}</span>
                  <p>{elem.description}</p>
                </div>
              </div>
              </Link>
            );
          })
        : products.map((elem) => {
            return (
              <Link to={`/product/find/${elem._id}`} style={{color:"inherit"}} >
              <div className="search-products__product">
                <div className="search-products__product__img">
                  <img src={elem.image} alt={elem.title} />
                </div>
                <div>
                  <h3>{elem.title}</h3>
                  {[...Array(elem.rating).keys()].map((el, i) => (
                    <span key={i}>
                     ⭐
                    </span>
                  ))}
                  <h3>{elem.price}</h3>
                  <span>{elem.quantity}</span>
                  <p>{elem.description}</p>
                </div>
              </div>
              </Link>
            );
          })}
    </>
  );
};

export default SearchProduct;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faLock } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ProductImgSlider from "./presentational/ProductImgSlider/ProductImgSlider";
import axios from "axios";
import "./ProductSelected.scss"

const ProductSelected = () => {
  const [infoProduct, setInfoProduct] = useState(null);
  const params = useParams();
  useEffect(() => {
    const productId = async () => {
      let product = await axios.get(
        `http://localhost:5006/api/product/find/${params.id}`
      );
      setInfoProduct(product);
    };
    productId();
  }, []);
  return (
    <>
    { infoProduct &&
      <div className="product-select">
        <h5 className="product-select__category">{infoProduct.data.data.categories.map((elem,i) => <span key={i}>{`${elem}/`}</span>  )}</h5>
        <div className="product-select__info">
          <ProductImgSlider info={infoProduct} />
          <div className="product-select__info__text">
            <h4></h4>
            <h2>{infoProduct.data.data.title}</h2>
            <div>
              {[...Array(infoProduct.data.rating).keys()].map((el, i) => (
                <span key={i}>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ fontSize: "13px", color: "#ffa41c" }}
                  />
                </span>
              ))}
            </div>
            <h2>{`Price: $ ${infoProduct.data.data.price}`}</h2>
            <p>{infoProduct.data.data.description}</p>
          </div>
          <div className="product-select__info__purchase">
            <h3>{`Price : $ ${infoProduct.data.data.price}`}</h3>
            <select name="quantity" id="">
            {[...Array(infoProduct.data.data.quantity).keys()].map((elem,i)=> <option value={elem+1}>{elem+1}</option> )}
            </select>
            <div className="product-select__info__purchase__btns">
            <button className="add">Add to Cart</button>
            <button className="buy">Buy Now</button>
            </div>
            <h4><FontAwesomeIcon icon={faLock} style={{ fontSize: "13px", color: "grey" }}/> Secure transaction</h4>
          </div>
        </div>
      </div>
}
</>  
  );
};

export default ProductSelected;

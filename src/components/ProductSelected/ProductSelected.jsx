import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faLock } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ProductImgSlider from "./presentational/ProductImgSlider/ProductImgSlider";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import "./ProductSelected.scss"
import { addProduct } from "../../redux/cartRedux";


const ProductSelected = () => {
  const [infoProduct, setInfoProduct] = useState(null);
  const [productSend,setProductSend] = useState({price:0,quantity:0,product:{}})
  const dispatch = useDispatch()
  const params = useParams();
  useEffect(() => { 
    const productId = async () => {
      let product = await axios.get(
        `https://mern-amazon12.herokuapp.com/api/product/find/${params.id}`
      );
      setInfoProduct(product.data.data);

    };
    productId();
  }, []);


  useEffect(() => {
      
      setProductSend({...infoProduct,quantity:1})
  }, [infoProduct])


const changeProduct = (e)=>{
    setProductSend(
        {...productSend,
        [e.target.name] : e.target.value       
        }
    )
}


  return (
    <>
    { infoProduct &&
      <div className="product-select">
        <h5 className="product-select__category">{infoProduct.categories.map((elem,i) => <span key={i}>{`${elem}/`}</span>  )}</h5>
        <div className="product-select__info">
          <ProductImgSlider info={infoProduct} />
          <div className="product-select__info__text">
            <h4></h4>
            <h2>{infoProduct.title}</h2>
            <div>
              {[...Array(infoProduct.rating).keys()].map((el, i) => (
                <span key={i + 5000}>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ fontSize: "13px", color: "#ffa41c" }}
                  />
                </span>
              ))}
            </div>
            <h2>{`Price: $ ${infoProduct.price}`}</h2>
            <p>{infoProduct.description}</p>
          </div>
          <div className="product-select__info__purchase">
            <h3>{`Price : $ ${infoProduct.price}`}</h3>
            <select name="quantity" onChange={(e)=> changeProduct(e) }  id="">
            {[...Array(infoProduct.quantity).keys()].map((elem,i)=> <option key={i+6000} value={elem+1}>{elem + 1}</option> )}
            </select>
            <div className="product-select__info__purchase__btns">
            <button className="add" onClick={()=>dispatch(addProduct({quantity:Number(productSend.quantity),product:productSend,price:productSend.price})) } >Add to Cart</button>
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

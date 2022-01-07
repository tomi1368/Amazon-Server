import React from "react";
import { useDispatch } from "react-redux";
import {removeProduct} from "../../../redux/cartRedux"
const WalletProduct = ({ info }) => {
  const dispatch = useDispatch();
  return (
  
    <div className="checkout-container__product">
      <div className="checkout-container__product__info">
        <div className="checkout-container__product__info__img">
          <img src={info.image} alt="" />
        </div>
        <div className="checkout-container__product__info__data">
          <h2>{info.title}</h2>
          <h4>{`Qty: ${info.quantity}`}</h4>
          <a style={{cursor:"pointer",color:"violet"}} onClick={() => dispatch(removeProduct(info._id))}>
            Remove
          </a>
        </div>
      </div>
      <div className="checkout-container__product__price">
        <h2>{info.price}</h2>
      </div>
      </div>
      
  
  );
};

export default WalletProduct;

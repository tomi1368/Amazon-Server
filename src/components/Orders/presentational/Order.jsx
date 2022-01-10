import React from "react";
import "./Order.scss";

const Order = ({info}) => {
  console.log(info);
  return (
    <div className="order">
      <div className="order-info">
        {info.products.map((el) => {
          return (
            <div className="apio">
              <div className="order-info__img">
                <img src={el.image} alt="" />
              </div>    
              <div className="order-info__textInfo">
                <h3>{el.title}</h3>
                <h4>{el.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h4>{new Date(info.createdAt).toDateString()}</h4>
        <h4>{`Total: $ ${info.amount}`}</h4>
      </div>
    </div>
  );
};

export default Order;

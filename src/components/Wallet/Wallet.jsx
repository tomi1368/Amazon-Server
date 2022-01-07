import React,{useEffect} from "react";
import WalletProduct from "./presentational/WalletProduct";
import { useSelector, useDispatch } from "react-redux";
import "./Wallet.scss"
import { emptyCart } from "../../redux/cartRedux";
import axios from "axios";
import {useSearchParams} from "react-router-dom"
import { addOrders } from "../../redux/apiRequests";






const Wallet = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state)=>state.user.currentUser)
  const [searchParams,setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

 


  useEffect(() => {
    if(searchParams.get("status") === "approved" && user){
      setSearchParams("")
      addOrders({ userId:user.user._id,products:cart.products,amount:cart.total},user.token,dispatch)
      dispatch(emptyCart())
    }
  }, [])


  const productCheckOut = async ()=> {
    let mercadoResponse = await axios({
      method:"POST" ,
      url:"http://localhost:5006/api/checkout",
      data:cart.products,
      headers: {
        Authorization: `Bearer ${user.token || " "}`,
      }
    })
    if(mercadoResponse.data.status == 201 || mercadoResponse.data.status == 200 ) {
      window.location.href = mercadoResponse.data.body.sandbox_init_point
    }
    
  }
  return (
    <div style={{minHeight:"100vh", backgroundColor: "#eaeded", zIndex:-1 }}>
    <div className="checkout">
    <div className="checkout-container">
      <div className="checkout-container__head">
        <h2>Shopping Cart</h2>
        <h4>Price</h4>
      </div>

      {cart.products.map((elem) => (
        <WalletProduct info={elem} />
      ))}
    </div>
    <div className="checkout-container__checkout">
        <h3>{`Subtotal: (${cart.quantity} items) $${cart.total} `}</h3>
        { user ? <button onClick={()=> productCheckOut()  }> Procced to Checkout </button> : <button style={{backgroundColor:"#cccccc"}} > Login to Checkout </button> }
    </div>
    </div>
    </div>
  );
};

export default Wallet;

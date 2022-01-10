import axios from "axios";
import {loginFailure, loginStart, loginSuccess } from "./userRedux";
import { ordersRequest, ordersAdd } from "./orderRedux";
import { initProducts } from "./productRedux";


export const login = async (user, dispatch,navigate) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("http://localhost:5006/api/auth/login", user);
    getOrders(response.data.user._id,response.data.token,dispatch)
    dispatch(loginSuccess({user:response.data.user,token:response.data.token}));
    navigate("/")
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const addOrders = async (order,token,dispatch)=>{ //Tengo que sacar el query que me devuelve ML porque me crea orders
  try{
    let newOrder = await axios({
      method:"POST",
      url:"http://localhost:5006/api/orders",
      data:order,
      headers:{
        Authorization: `Bearer ${token || " "}`
      }
    })
    dispatch(ordersAdd(newOrder.data))
  }catch(err){
    console.log(err.message)
  }
}

export const getOrders = async (id,token,dispatch)=>{
  try{
    let getAllOrders = await axios(
      {
        method:"GET",
        url:`http://localhost:5006/api/orders/${id}`,
        headers:{
          Authorization: `Bearer ${token || " "}`
        }

      }
       )
    dispatch(ordersRequest(getAllOrders.data))
  }catch(err){
    console.log(err)
  }
}

export const getProducts = async (dispatch)=>{
  let products = await axios.get("http://localhost:5006/api/product")
  console.log(products)
  dispatch(initProducts(products.data))
}
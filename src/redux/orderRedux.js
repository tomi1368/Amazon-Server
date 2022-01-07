import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    orders:[]
}



const orderSlice = createSlice({
    name:"orders",
    initialState:{
        orders:[],
    },
    reducers:{
        ordersRequest : (state,action)=>{
            state.orders = action.payload
          },
          ordersAdd:(state,action)=> {  
            state.orders = [...state.orders,action.payload] 
            },
        ordersEmpty:()=> initialValue
          
    }
})



export const {ordersRequest,ordersAdd,ordersEmpty} = orderSlice.actions
export default orderSlice.reducer
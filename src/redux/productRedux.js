import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:"allProducts",
    initialState:{
        ALLproducts:[]
    },
    reducers:{
        initProducts: (state,action)=> {state. ALLproducts = action.payload},
        addProducts:(state,action)=> {state. ALLproducts = [...state. ALLproducts,action.payload]}
    }
})


export const {initProducts,addProducts} = productSlice.actions
export default productSlice.reducer
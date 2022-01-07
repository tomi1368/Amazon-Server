import { createSlice, current } from "@reduxjs/toolkit";

const resetState= {
    products: [],
    quantity: 0,
    total: 0
}


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let found = state.products.find(
        (item) => item._id == action.payload.product._id
      );
      if (found) {
        let index = state.products.indexOf(found);
        state.products[index].quantity += Number(action.payload.quantity);
      } else {
        state.products.push(action.payload.product);
      }
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      let newProducts = current(state).products.filter(
        (elem) => elem._id != action.payload
      );
      if (newProducts) {
        state.products = [...newProducts];
        state.quantity = newProducts.reduce((total,current)=> total + Number(current.quantity),0)
        state.total = newProducts.reduce((total,current)=> total + (Number(current.quantity) * current.price),0)
      }
    },
    emptyCart:() => resetState
  },
});

export const { addProduct, removeProduct,emptyCart } = cartSlice.actions;

export default cartSlice.reducer;

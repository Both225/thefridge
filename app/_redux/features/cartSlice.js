import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += existingProduct ?? 1;
      } else {
        state.cart.push({
          ...product,
          quantity: product.quantity ?? 1,
        });
      }
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { addToCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;

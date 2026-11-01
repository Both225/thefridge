import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const item = action.payload;

      state.wishlist.push(item);
    },

    removeItem(state, action) {
      const id = action.payload;

      state.wishlist = state.wishlist.filter((item) => item.id != id);
    },
  },
});

export const { addToWishlist, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;

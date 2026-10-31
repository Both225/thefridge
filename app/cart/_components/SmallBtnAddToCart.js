"use client";

import IconButton from "@/app/_components/ui/IconButton";
import { addToCart } from "@/app/_redux/features/cartSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function SmallBtnAddToCart({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));

    toast.success("Added to cart successfully!");
  }

  return (
    <IconButton iconName="plus" variant="primary" onClick={handleAddToCart} />
  );
}

export default SmallBtnAddToCart;

"use client";

import { useDispatch } from "react-redux";
import { deleteCartItem } from "@/app/_redux/features/cartSlice";
import IconButton from "@/app/_components/ui/IconButton";

function DeleteButton({ product }) {
  const { id } = product;

  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteCartItem(id));
  }

  return <IconButton iconName="x" size="sm" onClick={handleDeleteItem} />;
}

export default DeleteButton;

"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "@/app/_redux/features/wishlistSlice";
import IconButton from "@/app/_components/ui/IconButton";
import toast from "react-hot-toast";

function DeleteButton({ id }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(removeItem(id));

    toast.success("Item delete successfully!");
  }

  return <IconButton iconName="x" onClick={handleDeleteItem} />;
}

export default DeleteButton;

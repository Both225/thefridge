"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/app/_redux/features/wishlistSlice";
import IconButton from "../ui/IconButton";

function AddToWishlistButton({ item }) {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  function handleAddToWishlist() {
    dispatch(addToWishlist(item));

    setActive(!active);
  }

  return (
    <IconButton
      iconName="heart"
      variant="outline"
      onClick={handleAddToWishlist}
      className={`border-none text-pink-500`}
      fill={active ? "#EC4899" : "none"}
    />
  );
}

export default AddToWishlistButton;

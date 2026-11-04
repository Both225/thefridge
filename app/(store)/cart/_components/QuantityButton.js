"use client";

import { decreaseItem, increaseItem } from "@/app/_redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@/app/_components/ui/IconButton";

function QuantityButton({ id }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cart);

  const item = items.find((item) => item.id === id);

  function handleIncrease() {
    dispatch(increaseItem(id));
  }

  function handleDecrease() {
    dispatch(decreaseItem(id));
  }

  const quantity = item.quantity;

  return (
    <div className="flex gap-2">
      <IconButton
        iconName="sub"
        onClick={handleDecrease}
        disabled={quantity <= 0}
      />
      <p>{item.quantity}</p>
      <IconButton iconName="plus" onClick={handleIncrease} />
    </div>
  );
}

export default QuantityButton;

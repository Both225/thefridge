"use client";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";

function CartList() {
  const items = useSelector((state) => state.cart.cart);

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </ul>
  );
}

export default CartList;

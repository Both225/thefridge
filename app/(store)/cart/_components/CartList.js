"use client";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";

function CartList() {
  const items = useSelector((state) => state.cart.cart) || [];

  if (items.length === 0)
    return (
      <div
        className={`flex items-center justify-center font-medium text-stroke-strong ${items.length === 0 ? "h-[60vh]" : ""}`}
      >
        You don&apos;t have any items in cart
      </div>
    );

  return (
    <ul className="space-y-4">
      {items?.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </ul>
  );
}

export default CartList;

"use client";

import { useSelector } from "react-redux";

import ButtonCheckOut from "./ButtonCheckOut";

function CartSummary() {
  const items = useSelector((state) => state.cart.cart) || [];

  console.log(items);

  const subPrice = items.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const discount = items.reduce((acc, cur) => {
    return acc + (cur.price * cur.price_after_discount) / 100;
  }, 0);

  const delivery = 1;

  const totalPrice = subPrice - (discount + delivery);

  return (
    <>
      {items.length > 0 && (
        <div>
          <p className="font-medium mb-4">Cart summary</p>
          <div className="w-full grid grid-cols-2 bg-surface p-4 rounded-lg shadow-raised gap-2 mb-4">
            <p>Price</p>
            <p className="justify-self-end">${subPrice}</p>
            <p>Discount</p>
            <p className="justify-self-end text-red-500">
              -${discount.toFixed(2)}
            </p>
            <p>Delivery</p>
            <p className="justify-self-end">${delivery}.00</p>
            <p>Total</p>
            <p className="justify-self-end text-primary font-medium">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <ButtonCheckOut />
        </div>
      )}
    </>
  );
}

export default CartSummary;

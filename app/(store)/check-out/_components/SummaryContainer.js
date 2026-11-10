"use client";

import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import Title from "@/app/_components/ui/Title";

function SummaryContainer() {
  const items = useSelector((state) => state.cart.cart) || [];

  return (
    <div>
      {items.length != 0 ? (
        <>
          <ProductList products={items} />
          <SummaryPrice items={items} />
        </>
      ) : (
        <div>
          <p>You don&apos;t have any ordered item</p>
        </div>
      )}
    </div>
  );
}

export default SummaryContainer;

function SummaryPrice({ items }) {
  const price = items.map((item) => item.price * item.quantity);

  const subPrice = price.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const discount = items.reduce((acc, cur) => {
    return (acc + (cur.price * cur.price_after_discount) / 100) * cur.quantity;
  }, 0);

  const delivery = 1;

  const totalPrice = subPrice - (discount + delivery);

  return (
    <div className="bg-surface p-1 rounded-lg">
      <Title text={"Price"} />
      <div className="w-full grid grid-cols-2 rounded-lg gap-2 mb-4">
        <p>Price</p>
        <p className="justify-self-end">${subPrice}</p>
        <p>Discount</p>
        <p className="justify-self-end text-red-500">-${discount.toFixed(2)}</p>
        <p>Delivery</p>
        <p className="justify-self-end">${delivery}.00</p>
        <p>Total</p>
        <p className="justify-self-end text-primary font-medium">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

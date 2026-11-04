"use client";

import { useSelector } from "react-redux";

function SumProductPrice({ id }) {
  const products = useSelector((state) => state.cart.cart);

  const item = products.find((product) => product.id === id);

  const sumPrice = Number(item.price) * Number(item.quantity);

  return <p className="font-medium text-primary">${sumPrice.toFixed(2)}</p>;
}

export default SumProductPrice;

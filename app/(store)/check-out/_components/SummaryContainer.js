"use client";

import { useSelector } from "react-redux";

import ProductList from "./ProductList";

function SummaryContainer() {
  const items = useSelector((state) => state.cart.cart);

  return (
    <div>
      <ProductList products={items} />
    </div>
  );
}

export default SummaryContainer;

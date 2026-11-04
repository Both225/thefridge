"use client";

import { useSelector } from "react-redux";
import Item from "./Item";

function ProductList() {
  const products = useSelector((state) => state.wishlist.wishlist);

  if (products.length === 0)
    return (
      <div
        className={`flex items-center justify-center font-medium text-stroke-strong ${products.length === 0 ? "h-[60vh]" : ""}`}
      >
        You don&apos;t have any items in cart
      </div>
    );

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
      {products?.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

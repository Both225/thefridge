import ProductCard from "./ProductCard";

function ProductList({ products = [] }) {
  if (products.length === 0) {
    return <p>You don&apos;t have any ordered item</p>;
  }

  return (
    <ul className="w-full space-y-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;

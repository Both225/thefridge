import ProductCard from "./ProductCard";

function ProductList({ products = [] }) {
  return (
    <ul className="w-full space-y-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;

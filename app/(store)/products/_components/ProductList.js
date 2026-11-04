import ProductGrid from "@/app/_components/product/ProductGrid";

async function ProductList({ products }) {
  return (
    <section>
      <ProductGrid products={products} />
    </section>
  );
}

export default ProductList;

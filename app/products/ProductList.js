import ProductGrid from "../_components/product/ProductGrid";
import { getProducts } from "../_services/productService";
import Loading from "../loading";

async function ProductList() {
  const products = await getProducts();

  if (!products) return <Loading />;

  return (
    <section>
      <ProductGrid products={products} />
    </section>
  );
}

export default ProductList;

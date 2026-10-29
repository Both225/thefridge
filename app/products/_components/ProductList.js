import ProductGrid from "../../_components/product/ProductGrid";
import { getProducts } from "../../_services/productService";
import Loading from "../../loading";

async function ProductList({ products }) {
  return (
    <section>
      <ProductGrid products={products} />
    </section>
  );
}

export default ProductList;

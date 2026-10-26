import ProductGrid from "../_components/product/ProductGrid";
import { mockProductsList } from "../_data/mockData";

function ProductList() {
  return (
    <section>
      <ProductGrid products={mockProductsList} />
    </section>
  );
}

export default ProductList;

import { mockProducts } from "@/app/_lib/mockData";
import ProductGrid from "./ProductGrid";
import ProductHeader from "./ProductHeader";
import Button from "../ui/Button";
import { getProducts } from "@/app/_services/productService";

async function ProductSection({ title }) {
  const products = await getProducts();

  const showProducts = products.slice(0, 4);

  return (
    <div className="space-y-4 flex flex-col">
      <ProductHeader title={title} />
      <ProductGrid products={showProducts} />
      <div className="self-center">
        <Button size="lg">See more</Button>
      </div>
    </div>
  );
}

export default ProductSection;

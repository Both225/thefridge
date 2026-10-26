import { mockProducts } from "@/app/_data/mockData";
import ProductGrid from "./ProductGrid";
import ProductHeader from "./ProductHeader";
import Button from "../ui/Button";

function ProductSection({ title }) {
  return (
    <div className="space-y-4 flex flex-col">
      <ProductHeader title={title} />
      <ProductGrid products={mockProducts} />
      <div className="self-center">
        <Button size="lg">See more</Button>
      </div>
    </div>
  );
}

export default ProductSection;

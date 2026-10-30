import ProductGrid from "./ProductGrid";
import ProductHeader from "./ProductHeader";
import Button from "../ui/Button";
import { getProducts } from "@/app/_services/productService";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function ProductSection({ title }) {
  const { products } = await getProducts({ page: 1 });

  const showProducts = products.slice(5, 9);

  return (
    <div className="space-y-4 flex flex-col">
      <ProductHeader title={title} />
      <Suspense fallback={<Loading />}>
        <ProductGrid products={showProducts} />
      </Suspense>
      <div className="self-center">
        <Button size="lg">See more</Button>
      </div>
    </div>
  );
}

export default ProductSection;

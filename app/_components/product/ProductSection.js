import Link from "next/link";

import ProductGrid from "./ProductGrid";
import ProductHeader from "./ProductHeader";
import Button from "../ui/Button";
import { getProducts } from "@/app/_services/productService";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function ProductContent({ productType }) {
  const type = productType === "discount" && true;

  const { products } = await getProducts({ page: 1, discount: type });

  const showProducts = products.slice(1, 4);

  return <ProductGrid products={showProducts} />;
}

async function ProductSection({ title }) {
  return (
    <div className="space-y-4 flex flex-col">
      <ProductHeader title={title} />
      <Suspense fallback={<Loading />}>
        <ProductContent productType="discount" />
      </Suspense>
      <div className="self-center">
        <Button size="lg">See more</Button>
      </div>
    </div>
  );
}

export default ProductSection;

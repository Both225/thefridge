/* React or Next */
import { Suspense } from "react";

/* Shared components */
import ProductSection from "@/app/_components/product/ProductSection";
import Loading from "@/app/loading";

/* Data */
import { weightItem } from "@/app/_lib/mockData";

/* Service */
import { getProduct } from "@/app/_services/productService";

/* Page specific components */
import WeightSelector from "./_components/WeightSelector";
import CollapseContainer from "./_components/CollapseContainer";
import FloatingAddToCart from "./_components/FloatingAddToCart";
import ProductInfo from "./_components/ProductInfo";

async function ProductDetail({ params }) {
  const { id } = await params;

  const product = await getProduct({ id });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductInfo product={product} />
      </Suspense>

      <WeightSelector items={weightItem} />

      <CollapseContainer />

      <FloatingAddToCart product={product} />

      <Suspense fallback={<Loading />}>
        <ProductSection title={"You may also like"} />
        <ProductSection title={"Special offer"} />
      </Suspense>
    </>
  );
}

export default ProductDetail;

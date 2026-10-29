/* React or Next */
import { Suspense } from "react";

/* Shared components */
import ProductSection from "@/app/_components/product/ProductSection";
import Loading from "@/app/loading";

/* Data */
import { weightItem } from "@/app/_lib/mockData";

/* Page specific components */
import WeightSelector from "./_components/WeightSelector";
import CollapseContainer from "./_components/CollapseContainer";
import FloatingAddToCart from "./_components/FloatingAddToCart";
import ProductInfo from "./_components/ProductInfo";

function ProductDetail({ params }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductInfo params={params} />
      </Suspense>

      <WeightSelector items={weightItem} />

      <CollapseContainer />

      <FloatingAddToCart />

      <Suspense fallback={<Loading />}>
        <ProductSection title={"You may also like"} />
        <ProductSection title={"Special offer"} />
      </Suspense>
    </>
  );
}

export default ProductDetail;

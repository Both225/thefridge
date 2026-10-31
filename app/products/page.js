import { Suspense } from "react";

import ProductSection from "../_components/product/ProductSection";
import PromoCarousel from "../_components/product/PromoCarousel";
import Title from "../_components/ui/Title";

import { promoItems } from "../_lib/mockData";

import OperationBar from "./_components/OperationBar";
import Header from "./_components/Header";
import Loading from "../loading";
import Products from "./_components/Products";

function page({ searchParams }) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <OperationBar />

      <Suspense fallback={<Loading />}>
        <Products searchParams={searchParams} />
      </Suspense>

      <Title text={"Special offer"} />

      <PromoCarousel promoItems={promoItems} />

      <Suspense fallback={<Loading />}>
        <ProductSection title={"Most buy products"} />
      </Suspense>
    </>
  );
}

export default page;

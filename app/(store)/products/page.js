import { Suspense } from "react";

import ProductSection from "../_components/product/ProductSection";
import Title from "../_components/ui/Title";

import { promoItems } from "../_lib/mockData";

import OperationBar from "./_components/OperationBar";
import Header from "./_components/Header";
import Loading from "../loading";
import Products from "./_components/Products";
import AutoProductCarousel from "../_components/ui/AutoProductsCarousel";

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

      <AutoProductCarousel promos={promoItems} />

      <Suspense fallback={<Loading />}>
        <ProductSection title={"Most buy products"} />
      </Suspense>
    </>
  );
}

export default page;

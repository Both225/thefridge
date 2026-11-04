import { Suspense } from "react";

import ProductSection from "@/app/_components/product/ProductSection";
import Title from "@/app/_components/ui/Title";

import { promoItems } from "../../_lib/mockData";

import OperationBar from "./_components/OperationBar";
import Header from "./_components/Header";
import Loading from "@/app/loading";
import Products from "./_components/Products";
import AutoProductCarousel from "../../_components/ui/AutoProductsCarousel";

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

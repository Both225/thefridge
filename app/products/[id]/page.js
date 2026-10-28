import ProductImage from "./ProductImage";
import ProductHeader from "./ProductHeader";
import WeightSelector from "./WeightSelector";
import { weightItem } from "@/app/_lib/mockData";
import CollapseContainer from "./CollapseContainer";
import ProductSection from "@/app/_components/product/ProductSection";
import ButtonAddToCart from "./ButtonAddToCart";
import { getProduct } from "@/app/_services/productService";
import Image from "next/image";
import Badge from "@/app/_components/ui/Badge";
import Loading from "@/app/loading";
import { Suspense } from "react";

async function ProductDetail({ params }) {
  const { id } = await params;

  console.log(id);

  const product = await getProduct({ id });

  const {
    image,
    name,
    price,
    discount,
    price_after_discount,
    discount_price,
    stock_quantity,
  } = product;

  if (!id) return <Loading />;

  return (
    <>
      <Suspense>
        <div className="relative h-[25rem] w-full">
          <Image src={image} alt="Fresh Beef" fill className="object-cover" />
        </div>
        <header className="space-y-2">
          <Badge
            text={stock_quantity > 0 ? "In stock" : "Out of stock"}
            bgColour={"#d0eddb"}
          />
          <p className="text-[1.8rem] font-medium">{name}</p>
        </header>
      </Suspense>
      <WeightSelector items={weightItem} />
      <CollapseContainer />
      <ProductSection title={"You may also like"} />
      <ProductSection title={"Special offer"} />
      <ButtonAddToCart />
    </>
  );
}

export default ProductDetail;

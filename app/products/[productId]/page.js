import ProductImage from "./ProductImage";
import ProductHeader from "./ProductHeader";
import WeightSelector from "./WeightSelector";
import { weightItem } from "@/app/_data/mockData";
import CollapseContainer from "./CollapseContainer";
import ProductSection from "@/app/_components/product/ProductSection";
import ButtonAddToCart from "./ButtonAddToCart";

function ProductDetail() {
  return (
    <>
      <ProductImage />
      <ProductHeader />
      <WeightSelector items={weightItem} />
      <CollapseContainer />
      <ProductSection title={"You may also like"} />
      <ProductSection title={"Special offer"} />
      <ButtonAddToCart />
    </>
  );
}

export default ProductDetail;

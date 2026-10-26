import ProductImage from "./ProductImage";
import ProductHeader from "./ProductHeader";
import WeightSelector from "./WeightSelector";
import { weightItem } from "@/app/_data/mockData";

function ProductDetail() {
  return (
    <>
      <ProductImage />
      <ProductHeader />
      <WeightSelector items={weightItem} />
    </>
  );
}

export default ProductDetail;

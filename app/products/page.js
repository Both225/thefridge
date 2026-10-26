import Title from "../_components/ui/Title";
import OperationBar from "./OperationBar";
import HorizontalFilter from "./HorizontalFilter";
import ProductList from "./ProductList";
import PaginationWrapper from "./PaginationWrapper";
import PromoCarousel from "../_components/product/PromoCarousel";
import { promoItems } from "../_data/mockData";
import ProductSection from "../_components/product/ProductSection";

function page() {
  return (
    <>
      <header className="flex justify-between items-end">
        <Title text={"Fish & Seafood"} />
        <p className="text-primary-strong font-medium">80 products</p>
      </header>
      <OperationBar />
      <HorizontalFilter />
      <ProductList />
      <PaginationWrapper totalPages={5} />
      <Title text={"Special offer"} />
      <PromoCarousel promoItems={promoItems} />
      <ProductSection title={"Most buy products"} />
    </>
  );
}

export default page;

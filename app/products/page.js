import Title from "../_components/ui/Title";
import OperationBar from "./OperationBar";
import HorizontalFilter from "./HorizontalFilter";
import ProductList from "./ProductList";
import PaginationWrapper from "./PaginationWrapper";

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
    </>
  );
}

export default page;

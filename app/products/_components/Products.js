import ProductList from "./ProductList";
import PaginationWrapper from "./PaginationWrapper";
import { getProducts } from "@/app/_services/productService";
import Loading from "@/app/loading";
import { PRODUCT_PER_PAGE } from "@/app/_util/util";

async function Products({ searchParams }) {
  const { page } = await searchParams;

  const currentPage = page || 1;

  const { products, count } = await getProducts(currentPage);

  const pages = Math.ceil(count / PRODUCT_PER_PAGE);

  console.log(pages);

  if (!products) return <Loading />;

  return (
    <>
      <ProductList products={products} />
      <PaginationWrapper totalPages={pages} />
    </>
  );
}

export default Products;

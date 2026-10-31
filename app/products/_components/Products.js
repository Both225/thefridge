import ProductList from "./ProductList";
import PaginationWrapper from "./PaginationWrapper";
import { getProducts } from "@/app/_services/productService";
import Loading from "@/app/loading";
import { PRODUCT_PER_PAGE } from "@/app/_util/util";

async function Products({ searchParams }) {
  const params = await searchParams;

  const currentPage = params.page || 1;

  const { products, count } = await getProducts({
    page: currentPage,
    categories: params.category,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
    sort: params.sort,
    discount: params.discount,
  });

  const pages = Math.ceil(count / PRODUCT_PER_PAGE);

  if (!products) return <Loading />;

  return (
    <>
      <ProductList products={products} />
      <PaginationWrapper totalPages={pages} />
    </>
  );
}

export default Products;

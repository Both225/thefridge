import supabase from "../_lib/supabase";
import { notFound } from "next/navigation";
import { PRODUCT_PER_PAGE } from "../_util/util";

export async function getProducts({
  page = 1,
  categories = "all",
  minPrice,
  maxPrice,
}) {
  const query = supabase
    .from("products")
    .select(
      "id, name, description, alt, stock_quantity, price, discount, discount_percentage, price_after_discount, image",
      { count: "exact" },
    );

  const from = (page - 1) * PRODUCT_PER_PAGE;
  const to = from + PRODUCT_PER_PAGE - 1;

  if (categories != "all") {
    query.in("category", categories?.split(","));
  }

  if (minPrice) {
    query.gte("price", minPrice || 0);
  }

  if (maxPrice) {
    query.lte("price", maxPrice || 500);
  }

  const { data: products, error, count } = await query.range(from, to);

  if (error) {
    console.error(error);
    notFound();
  }

  return { products, count };
}

export async function getProduct({ id }) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, description, alt, stock_quantity, price, discount, discount_percentage, price_after_discount, image",
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

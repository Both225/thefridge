import supabase from "../_lib/supabase";
import { notFound } from "next/navigation";
import { PRODUCT_PER_PAGE } from "../_util/util";

export async function getProducts(page = 1) {
  const from = (page - 1) * PRODUCT_PER_PAGE;
  const to = from + PRODUCT_PER_PAGE - 1;

  const {
    data: products,
    error,
    count,
  } = await supabase
    .from("products")
    .select(
      "id, name, description, alt, stock_quantity, price, discount, discount_percentage, price_after_discount, image",
      { count: "exact" },
    )
    .range(from, to);

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

// id,name,alt,price,discount,stock_quantity,discount_price,price_after_discount,image

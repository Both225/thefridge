import supabase from "../_lib/supabase";
import { notFound } from "next/navigation";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getProduct({ id }) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

// id,name,alt,price,discount,stock_quantity,discount_price,price_after_discount,image

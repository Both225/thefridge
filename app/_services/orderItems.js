import { createClient } from "../_lib/supabase/server";

export async function insertItem({ productId, orderId, quantity, subtotal }) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("order_items")
    .insert([
      {
        product_id: productId,
        order_id: orderId,
        quantity: quantity,
        subtotal: subtotal,
      },
    ])
    .select();

  if (error) throw error;
}

import Title from "@/app/_components/ui/Title";

import CheckoutForm from "./_components/CheckoutForm";
import OrderSummary from "./_components/OrderSummary";
import { createClient } from "@/app/_lib/supabase/server";
import { redirect } from "next/navigation";

async function CheckOutPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  return (
    <>
      <Title text={"Adding shipping address"} />

      <OrderSummary />
      <CheckoutForm />
    </>
  );
}

export default CheckOutPage;

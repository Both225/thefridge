import Title from "../_components/ui/Title";

import CheckoutForm from "./_components/CheckoutForm";
import OrderSummary from "./_components/OrderSummary";

function CheckOutPage() {
  return (
    <>
      <Title text={"Adding shipping address"} />

      <CheckoutForm />
      <OrderSummary />
    </>
  );
}

export default CheckOutPage;

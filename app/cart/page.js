import Title from "../_components/ui/Title";

import CartSummary from "./_components/CartSummary";
import CartItem from "./_components/CartItem";

function page() {
  return (
    <>
      <Title text={"Your cart"} />
      <CartItem />
      <CartSummary />
    </>
  );
}

export default page;

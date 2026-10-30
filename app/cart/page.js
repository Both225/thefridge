import Title from "../_components/ui/Title";

import CartSummary from "./_components/CartSummary";

import CartList from "./_components/CartList";

function page() {
  return (
    <>
      <Title text={"Your cart"} />
      <CartList />
      <CartSummary />
    </>
  );
}

export default page;

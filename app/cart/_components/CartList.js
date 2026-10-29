import CartItem from "./CartItem";

function CartList() {
  return (
    <ul>
      {items.map((item) => (
        <CartItem key={item.name} />
      ))}
    </ul>
  );
}

export default CartList;

function CartSummary() {
  return (
    <div>
      <p className="font-medium mb-4">Cart summary</p>
      <div className="w-full grid grid-cols-2 bg-surface p-4 rounded-lg shadow-raised gap-2">
        <p>Price</p>
        <p className="justify-self-end">$14.00</p>
        <p>Discount</p>
        <p className="justify-self-end">-$2.00</p>
        <p>Delivery</p>
        <p className="justify-self-end">$1.00</p>
        <p>Total</p>
        <p className="justify-self-end">$13.00</p>
      </div>
    </div>
  );
}

export default CartSummary;

import Image from "next/image";

function ProductCard({ product }) {
  const { image, name, quantity, price, discount_percentage, discount } =
    product;

  let discountPrice = 0;

  if (discount) {
    discountPrice = (price * discount_percentage) / 100;
  }

  const totalPrice = price * quantity - discountPrice * quantity;

  return (
    <div className="flex w-full gap-5 items-center">
      <div className="relative w-20 h-20 rounded-md">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          preload
        />
      </div>
      <div className="flex justify-between flex-1">
        <p>{name}</p>
        <div className="flex gap-12">
          <p>{quantity}</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

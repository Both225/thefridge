import Image from "next/image";

function ItemCard({ item }) {
  const { image, alt, name, quantity, totalPrice } = item;

  return (
    <div>
      <div className="relative aspect-square w-full h-40">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-strong">{name}</p>
        <p className="text-weak">{quantity}</p>
      </div>
      <p className="text-primary">{totalPrice}</p>
    </div>
  );
}

export default ItemCard;

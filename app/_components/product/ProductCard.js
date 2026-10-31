import Image from "next/image";
import Link from "next/link";
import SmallBtnAddToCart from "@/app/cart/_components/SmallBtnAddToCart";

function ProductCard({ product }) {
  const {
    id,
    image,
    name,
    description,
    price,
    alt,
    discount,
    discount_percentage,
    price_after_discount,
  } = product;

  return (
    <div className="w-[18rem] rounded-lg overflow-hidden bg-white shadow-raised">
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square w-full h-60">
          <Image
            src={image}
            alt={alt || name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            preload
          />
          {discount && (
            <p className="absolute top-2 left-2 px-2 py-1 bg-white rounded-2xl font-semibold text-primary text-[1.2rem]">
              {discount_percentage}
            </p>
          )}
        </div>
      </Link>
      <div className="p-3 space-y-6">
        <Link href={`/products/${id}`}>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-weak text-[1.2rem] leading-tight">
              {description.length > 35
                ? `${description.slice(0, 35)}...`
                : description}
            </p>
          </div>
        </Link>
        <div className="flex justify-between items-end">
          {discount ? (
            <div className="flex flex-col items-start">
              <p className="line-through text-[1.2rem] text-weak leading-none">
                {price}
              </p>
              <p className="font-semibold text-primary leading-none">
                {price_after_discount}/kg
              </p>
            </div>
          ) : (
            <p className="font-semibold text-primary ">{price}/kg</p>
          )}
          <SmallBtnAddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

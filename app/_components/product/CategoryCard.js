import Image from "next/image";
import Link from "next/link";

function CategoryCard({ item }) {
  const { image, label } = item;

  return (
    <Link href={`/products?category=${item.value}`}>
      <div className="relative w-44 h-48 rounded-lg shadow-raised overflow-hidden">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-0 bg-linear-to-t from-black/85 via-black/30 to-black/20" />
        <p className="absolute text-[1.4rem] text-white left-2 bottom-2 z-10">
          {label}
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;

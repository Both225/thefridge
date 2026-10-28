import Image from "next/image";

function CategoryCard({ item }) {
  const { image, alt, label } = item;

  return (
    <div className="relative w-44 h-48 rounded-lg shadow-raised overflow-hidden">
      <Image src={image} alt={alt || label} fill className="object-cover" />
      <div className="absolute inset-0 z-0 bg-linear-to-t from-black/85 via-black/40 to-black/30" />
      <p className="absolute text-[1.4rem] text-white left-2 bottom-2 z-10">
        {label}
      </p>
    </div>
  );
}

export default CategoryCard;

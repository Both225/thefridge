import Image from "next/image";

function CategoryCard({ item }) {
  const { image, alt, label } = item;

  return (
    <div className="relative w-44 h-48 rounded-lg shadow-raised overflow-hidden">
      <p className="absolute left-2 top-2 z-10">{label}</p>
      <Image src={image} alt={alt || label} fill className="object-cover" />
    </div>
  );
}

export default CategoryCard;

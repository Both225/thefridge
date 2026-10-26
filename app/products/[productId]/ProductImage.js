import Image from "next/image";
import chickenBreast from "../../../public/products/chicken-breast.jpg";

function ProductImage() {
  return (
    <div className="relative h-[25rem] w-full">
      <Image
        src={chickenBreast}
        alt="Fresh Beef"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default ProductImage;

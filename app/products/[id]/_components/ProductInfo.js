import Image from "next/image";
import Badge from "@/app/_components/ui/Badge";

async function ProductInfo({ product }) {
  const { image, stock_quantity, name } = product;

  return (
    <>
      <div className="relative h-100 w-full">
        <Image
          src={image}
          alt="Fresh Beef"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          preload
        />
      </div>
      <header className="space-y-2">
        <Badge
          text={stock_quantity > 0 ? "In stock" : "Out of stock"}
          bgColour={"#d0eddb"}
        />
        <p className="text-[1.8rem] font-medium">{name}</p>
      </header>
    </>
  );
}

export default ProductInfo;

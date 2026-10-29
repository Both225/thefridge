import Image from "next/image";

import Select from "@/app/_components/ui/Select";
import IconButton from "@/app/_components/ui/IconButton";
import chickenBreast from "../../../public/products/chicken-breast.jpg";

import { mockSelect } from "@/app/_lib/mockData";

function CartItem() {
  return (
    <li className="px-2 py-6 relative border-b-2 border-b-stroke-weak flex justify-between items-center bg-surface rounded-lg p-4">
      <div className="relative w-30 h-30 rounded-md">
        <Image
          src={chickenBreast}
          alt="Test"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          preload
        />
      </div>
      <div className="space-y-2">
        <p className="font-medium">Canadian chicken breast</p>
        <p className="text-[1.4rem] text-weak font-medium">500g</p>
        <p className="font-medium text-primary">$14.00</p>
      </div>
      <div className="self-end">
        <Select options={mockSelect} label="quantity" />
      </div>
      <div className="absolute top-0 right-2">
        <IconButton iconName="x" size="sm" />
      </div>
    </li>
  );
}

export default CartItem;

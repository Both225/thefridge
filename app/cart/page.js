"use client";

import Image from "next/image";
import Title from "../_components/ui/Title";
import chickenBreast from "../../public/products/chicken-breast.jpg";
import Select from "../_components/ui/Select";
import { mockSelect } from "../_data/mockData";
import IconButton from "../_components/ui/IconButton";

function page() {
  return (
    <>
      <Title text={"Your cart"} />
      <CartItem />
    </>
  );
}

export default page;

function CartList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <CartItem key={item.name} />
      ))}
    </ul>
  );
}

function CartItem({ item }) {
  // const { name, weight, price } = item;

  return (
    <li className="px-2 py-6 relative border-b-2 border-b-stroke-weak flex justify-between items-center">
      <div className="relative w-30 h-30 rounded-md">
        <Image src={chickenBreast} alt="Test" fill className="object-cover" />
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

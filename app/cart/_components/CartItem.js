import Image from "next/image";

import DeleteButton from "./DeleteButton";
import SumProductPrice from "./SumProductPrice";
import QuantityButton from "./QuantityButton";

function CartItem({ product }) {
  const { id, image, name, price } = product;

  return (
    <li className="px-2 py-6 relative border-b-2 border-b-stroke-weak flex justify-between items-center bg-surface rounded-lg p-4">
      <div className="flex gap-6">
        <div className="relative w-30 h-30 rounded-md">
          <Image
            src={image}
            alt="Test"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            preload
          />
        </div>
        <div className="space-y-2">
          <p className="font-medium">{name}</p>
          <p className="text-[1.4rem] text-weak font-medium">${price}/1kg</p>
          <SumProductPrice price={price} id={id} />
        </div>
      </div>
      <div className="self-end">
        <QuantityButton id={id} />
      </div>
      <div className="absolute top-0 right-2">
        <DeleteButton product={product} id={id} />
      </div>
    </li>
  );
}

export default CartItem;

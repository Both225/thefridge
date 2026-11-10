import Image from "next/image";

async function SummaryContainer() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default SummaryContainer;

function ProductList({ products }) {
  return (
    <ul>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

function ProductCard({ product }) {
  const { image, name, quantity, totalprice } = product;

  return (
    <div className="flex">
      <div className="relative w-30 h-30 rounded-md">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          preload
        />
      </div>
    </div>
  );
}

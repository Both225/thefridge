import Title from "@/app/_components/ui/Title";
import { getProducts } from "@/app/_services/productService";

async function Header() {
  const { count } = await getProducts({ page: 1 });

  return (
    <header className="flex justify-between items-end">
      <Title text={"Fish & Seafood"} />
      <p className="text-primary-strong font-medium">{count} products</p>
    </header>
  );
}

export default Header;

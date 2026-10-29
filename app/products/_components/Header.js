import Title from "@/app/_components/ui/Title";

function Header() {
  return (
    <header className="flex justify-between items-end">
      <Title text={"Fish & Seafood"} />
      <p className="text-primary-strong font-medium">80 products</p>
    </header>
  );
}

export default Header;

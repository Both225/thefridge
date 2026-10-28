import CategoryGrid from "./_components/product/CategoryGrid";
import ProductSection from "./_components/product/ProductSection";
import Collapse from "./_components/ui/Collapse";
import Hero from "./_components/ui/Hero";
import Title from "./_components/ui/Title";
import { mockCategory } from "./_data/mockData";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-8">
        <div className="space-y-4 mt-8">
          <Title text={"Featured categories"} />
          <CategoryGrid categories={mockCategory} />
        </div>
        <ProductSection title={"Discount products"} />
        <ProductSection title={"New products"} />
        <div>
          <Title text={"Why choose the fridge"} />
          <CollapseContainer />
        </div>
      </div>
    </>
  );
}

function CollapseContainer() {
  return (
    <div>
      <Collapse title={"Security"}>
        <p>Testing</p>
      </Collapse>
      <Collapse title={"Delivery"}>
        <p>Testing</p>
      </Collapse>
      <Collapse title={"Review"}>
        <p>Testing</p>
      </Collapse>
    </div>
  );
}

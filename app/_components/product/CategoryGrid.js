import CategoryCard from "./CategoryCard";

const categories = [
  { value: "meat", label: "Fresh meat", image: "/products/fresh-beef.jfif" },
  {
    value: "fish-seafood",
    label: "Fish & Seafood",
    image: "/products/fresh-shrimp.jfif",
  },
  {
    value: "canned",
    label: "Canned tuna",
    image: "/products/canned-tuna.jpg",
  },
  { value: "juice", label: "Juice", image: "/products/orange-juice.jfif" },
  {
    value: "vegatable",
    label: "Vegatables",
    image: "/products/fresh-tomatoes.jpg",
  },
  { value: "dairy", label: "Dairy", image: "/products/fresh-milk.jfif" },
];

function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-6">
      {categories.map((item) => (
        <CategoryCard key={item.value} item={item} />
      ))}
    </div>
  );
}

export default CategoryGrid;

import CategoryCard from "./CategoryCard";

function CategoryGrid({ categories }) {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-6">
      {categories.map((item) => (
        <CategoryCard key={item.label} item={item} />
      ))}
    </div>
  );
}

export default CategoryGrid;

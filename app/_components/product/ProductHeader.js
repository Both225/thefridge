import Title from "../ui/Title";

function ProductHeader({ title, description }) {
  return (
    <div>
      <Title text={title} />
      {description && <p className="text-weak text-[1.4rem]">{description}</p>}
    </div>
  );
}

export default ProductHeader;

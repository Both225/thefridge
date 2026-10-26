import Badge from "@/app/_components/ui/Badge";

function ProductHeader() {
  return (
    <div className="space-y-2">
      <Badge text={"In stock"} bgColour={"#d0eddb"} />
      <p className="text-[1.8rem] font-medium">Chicken breast</p>
    </div>
  );
}

export default ProductHeader;

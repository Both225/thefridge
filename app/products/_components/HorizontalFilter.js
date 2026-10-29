import Badge from "../../_components/ui/Badge";

function HorizontalFilter() {
  return (
    <section className="flex gap-2">
      <Badge bgColour={"#e8f1ec"} text={"Fresh"} />
      <Badge bgColour={"#e8f1ec"} text={"In stock"} />
      <Badge bgColour={"#e8f1ec"} text={"Under $10"} />
      <Badge bgColour={"#e8f1ec"} text={"Under $15"} />
    </section>
  );
}

export default HorizontalFilter;

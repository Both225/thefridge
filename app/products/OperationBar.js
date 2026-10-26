import IconTextButton from "../_components/ui/IconTextButton";

function OperationBar() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <IconTextButton iconName={"filter"} text={"Filter"} />
      <IconTextButton iconName={"sortBy"} text={"SortBy"} />
    </section>
  );
}

export default OperationBar;

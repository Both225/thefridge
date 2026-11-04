function WeightBox({ text, onClick, selectedItem }) {
  const activeItem = text === selectedItem;

  return (
    <button
      className={`p-[1rem] text-[1.4rem] rounded-lg border ${activeItem ? "text-primary border-primary" : "border-stroke-weak"}`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}

export default WeightBox;

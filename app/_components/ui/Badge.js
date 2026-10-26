function Badge({ text, bgColour }) {
  return (
    <p
      style={{ backgroundColor: bgColour }}
      className="px-4 py-1 text-[1.4rem] rounded-xl text-black w-fit"
    >
      {text}
    </p>
  );
}

export default Badge;

function Badge({ children, bgColour }) {
  return (
    <p
      style={{ backgroundColor: bgColour }}
      className="px-2 py-1 text-[1.2rem] rounded-xl  text-white w-fit"
    >
      {children}
    </p>
  );
}

export default Badge;

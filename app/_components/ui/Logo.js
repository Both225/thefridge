function Logo({ colour = false }) {
  return (
    <p
      className={`text-[1.8rem] font-medium tracking-wide ${colour && "text-primary"}`}
    >
      TheFridge
    </p>
  );
}

export default Logo;

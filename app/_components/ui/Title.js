function Title({ text, size = "md" }) {
  const sizes = {
    sm: "text-[1.8rem] font-semibold leading-[2.4rem]",
    md: "text-[2rem] font-semibold leading-[2.8rem]",
    lg: "text-[2.4rem] font-semibold leading-[3.6rem]",
  };

  return <p className={`${sizes[size]}`}>{text}</p>;
}

export default Title;

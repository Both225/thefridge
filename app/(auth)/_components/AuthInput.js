import Link from "next/link";

function AuthInput({
  value,
  onChange,
  placeholder,
  label,
  id,
  type = "text",
  hasLink = false,
}) {
  return (
    <div className="flex flex-col gap-1 w-120">
      <div className="flex justify-between items-end">
        <label className="text-[1.4rem] text-primary font-medium" htmlFor={id}>
          {label}
        </label>
        {hasLink && (
          <Link
            href={""}
            className="text-primary underline text-[1.2rem] font-medium"
          >
            Forget password?
          </Link>
        )}
      </div>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        type={type}
        className="px-3 py-2 border-2 border-stroke-weak rounded-lg text-strong"
      />
    </div>
  );
}

export default AuthInput;

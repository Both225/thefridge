import { ChevronDown } from "lucide-react";

function Select({ id, name, options }) {
  return (
    <div className="relative flex items-center gap-2">
      <select
        id={id}
        name={name}
        className="appearance-none border-0 bg-transparent pr-7 outline-none focus:ring-0 text-[1.4rem]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown size={16} className="pointer-events-none absolute right-1" />
    </div>
  );
}

export default Select;

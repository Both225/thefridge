"use client";

function Input({
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  id,
  icon: Icon,
  iconPosition = "left",
}) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="text-[1.4rem] text-primary font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && iconPosition === "left" && (
          <Icon
            size={18}
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-weak `}
          />
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-160 rounded-lg border border-stroke-weak px-4 py-3 outline-none focus:border-primary focus:ring focus:ring-primary-strong ${Icon && iconPosition === "left" ? "pl-12 pr-4" : "pl-4"}
            ${Icon && iconPosition === "right" ? "pr-10" : ""}`}
        />
        {Icon && iconPosition === "right" && (
          <Icon
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-weak"
          />
        )}
      </div>
    </div>
  );
}

export default Input;

// This function is use in the component that used this input
/* 
const [formData, setFormData] = useState({
    name: "",
    age: "",
  }); // ignore this object

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    // { name: "John", age: "25" }
  }
*/

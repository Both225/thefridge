"use client";

import { Select } from "antd";
import { useState } from "react";

import Title from "@/app/_components/ui/Title";

function CheckoutForm() {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(addressName);
  }

  return (
    <>
      <Title text={"Adding shipping address"} />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputField
          label={"Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Name"}
        />
        <InputField
          label={"Phone number"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder={"Phone number"}
          type="number"
        />
        <InputField
          label={"Address"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder={"Address (area and street)"}
        />
        <div className="flex gap-4">
          <CitySelect value={city} onChange={(value) => setCity(value)} />
          <DistrictSelect
            value={district}
            onChange={(value) => setDistrict(value)}
          />
        </div>
      </form>
    </>
  );
}

export default CheckoutForm;

function CitySelect({ value, onChange }) {
  return (
    <Select
      value={value || undefined}
      placeholder={"Select city"}
      style={{ width: 160 }}
      onChange={() => onChange(value)}
      options={[
        { value: "phnom-penh", label: "Phnom Penh" },
        { value: "kandal", label: "Kandal" },
        { value: "prey-veng", label: "Prey veng" },
      ]}
    />
  );
}

function DistrictSelect({ value, onChange }) {
  return (
    <Select
      value={value || undefined}
      placeholder={"Select district"}
      style={{ width: 160 }}
      onChange={() => onChange(value)}
      options={[
        { value: "russey-keo", label: "Russey keo" },
        { value: "chroy-chongva", label: "Chroy chongva" },
        { value: "steung-meanchey", label: "Steung meanchey" },
      ]}
    />
  );
}

function InputField({
  value,
  onChange,
  placeholder,
  label,
  id,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[1.4rem] text-primary font-medium" htmlFor={id}>
        {label}
      </label>
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

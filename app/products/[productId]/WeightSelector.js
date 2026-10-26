"use client";

import { useState } from "react";
import WeightBox from "./WeightBox";

function WeightSelector({ items }) {
  const [selectedItem, setSelectedItem] = useState("");

  function onSelect(choice) {
    setSelectedItem((prev) => choice);
  }

  return (
    <div className="flex gap-4 w-full">
      {items.map((item) => (
        <WeightBox
          key={item.value}
          text={item.label}
          onClick={onSelect}
          selectedItem={selectedItem}
        />
      ))}
    </div>
  );
}

export default WeightSelector;

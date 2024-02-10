import React, { useState } from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="mr-4 checkmark"></span>
      {label}
    </label>
  );
};

export default CustomCheckbox;

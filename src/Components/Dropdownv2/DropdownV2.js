import React, { useState, useEffect } from "react";
import "./DropdownV2.css";

const DropdownV2 = ({ options, onSelect, defaultSelected }) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected || null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedOption(defaultSelected);
  }, [defaultSelected]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown-container-v2">
      <div className="dropdown-header-v2" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Select an Option"}
        <svg
          className={`arrow ${isOpen ? "open" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {isOpen && (
        <ul className="dropdown-list-v2">
          {options.map((option) => (
            <>
              <li key={option.value} onClick={() => handleOptionSelect(option)}>
                {option.label}
              </li>
              <hr />
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownV2;

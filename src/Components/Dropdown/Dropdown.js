import React, { useState, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, onSelect, defaultSelected }) => {
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
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
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
        <ul className="dropdown-list">
          {options.map((option) => (
            <>
              <li key={option.value} onClick={() => handleOptionSelect(option)}>
                {option.label}
              </li>
              <div className="px-4">
                <div className="dropdown-divider"></div>
              </div>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

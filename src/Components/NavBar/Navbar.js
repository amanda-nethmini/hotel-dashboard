import React from "react";
import "./NavBar.css";
import NavImage from "../../Images/nav-image.webp";

const menuItems = [
  {
    id: 1,
    icon: (
      <svg
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    text: "Sign In",
  },
  {
    id: 2,
    icon: "",
    text: "Join Now",
  },
  {
    id: 3,
    icon: "",
    text: "Find Reservations",
  },
  {
    id: 4,
    icon: (
      <svg
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    text: "English",
  },
  {
    id: 5,
    icon: "",
    text: "LKR",
  },
  {
    id: 6,
    icon: (
      <svg
        class="h-5 w-5 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />{" "}
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    text: "",
    rightBorder: false,
  },
];

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-content">
        <div className="nav-left">
          <img src={NavImage} alt="logo" />
        </div>
        <div className="nav-right">
          {menuItems.map((item) => (
            <div key={item.id} className="nav-link">
              <div className="mr-2">{item.icon ? item.icon : ""}</div>
              <div className="mr-5">{item.text ? item.text : ""}</div>
              {item.rightBorder === false ? (
                " "
              ) : (
                <div className="h-4 w-0.5 bg-gray-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

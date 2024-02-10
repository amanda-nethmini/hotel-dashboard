import React from "react";
import "./Header.css";

const headerLinks = [
  {
    id: 1,
    text: "ABOUT",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    subItems: [
      {
        title: "About the Hotel",
        items: [
          "Overview",
          "Explore Colombo",
          "Services & Facilities",
          "Map & Directions",
        ],
      },
    ],
  },
  {
    id: 2,
    text: "ROOMS & SUITES",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    subItems: [
      {
        title: "Rooms",
        items: [
          "Deluxe Lake View",
          "Deluxe Ocean View",
          "Premier Balcony",
          "Premier Ocean View",
        ],
      },
      {
        title: "Horizon Club",
        items: ["Horizon Club Lake View", "Horizon Club Ocean View"],
      },
      {
        title: "Suites",
        items: ["Executive Suites", "Specialty Suites", "Shangri-La Suite"],
      },
      {
        title: "Connecting Rooms",
        items: [
          "Executive Suite & Premier Ocean Room Connecting",
          "Two Deluxe Lake View Rooms Connecting",
        ],
      },
    ],
    footer: "ROOMS & SUITES OVERVIEW",
  },
  {
    id: 3,
    text: "DINING",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    subItems: [
      {
        title: "Restaurants",
        items: [
          "Cake Temptations by Shangri-La Colombo",
          "Shang Palace",
          "Capital Bar & Grill",
          "Tiki Bar",
          "Central",
          "Central café",
        ],
      },
      {
        title: "Bars & Lounges",
        items: [
          "Sapphyr Lounge",
          "Capital Bar & Grill",
          "Pool Bar",
          "Tiki Bar",
        ],
      },
    ],
    footer: "DINING OVERVIEW",
  },
  {
    id: 4,
    text: "EXPERIENCE",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    subItems: [
      {
        title: "For Kids",
        items: ["Overview", "Adventure Zone", "Celebrations"],
      },
      {
        title: "Health & Leisure",
        items: ["Overview", "Health Club", "Chi, The Spa"],
      },
    ],
  },
  {
    id: 5,
    text: "EVENTS",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    subItems: [
      {
        title: "Meetings & Events",
        items: [
          "Overview",
          "Experience It",
          "Coworking Space",
          "Outside Catering",
          "Request For Proposal",
          "Book Meeting Room Online",
        ],
      },
      {
        title: "Wedding and Celebrations",
        items: [
          "Overview",
          "Wedding Planning",
          "Weddings By Shangri-La",
          "Request For Proposal",
        ],
      },
    ],
  },
  {
    id: 6,
    text: "GALLERY",
    icon: "",
  },
  {
    id: 7,
    text: "OFFERS",
    icon: "",
  },
  {
    id: 8,
    text: "MORE",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    subItems: [{ title: "Appartments", items: ["Learn More"] }],
  },
];

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          {headerLinks.map((link) => (
            <div key={link.id} className="header-link">
              <div className="mr-2">{link.text}</div>
              <div className=" icon">{link.icon}</div>
              {link.subItems && (
                <div className="sub-items">
                  <div className="sub-main-columns">
                    {link.subItems.map((item, index) => (
                      <div className="sub-columns">
                        <div>
                          {item.title ? (
                            <h1 className="sub-menu-title">{item.title}</h1>
                          ) : (
                            ""
                          )}
                        </div>
                        <div>
                          {item.items
                            ? item.items.map((subItem) => (
                                <div key={index} className="sub-menu-items">
                                  {subItem}
                                </div>
                              ))
                            : ""}
                        </div>
                      </div>
                    ))}
                  </div>
                  {link.footer && (
                    <div className="sub-footer">
                      <hr />
                      <div className="mt-3 mb-1">{link.footer}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="ml-20">
            <button className="header-button ">FIND A HOTEL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

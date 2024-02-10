import React from "react";
import "./Offers.css";

const offerCards = [
  {
    id: 1,
    src: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/{32926B10-8EE8-4639-B2DD-AC55F70CB76D}slcwithbreakfast.jpg",
    type: "Rooms & Suites",
    date: "01 Feb 2021 - 31 Dec 2021",
    title: "Shangri–La Circle Exclusive Member Rate with Breakfast",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "LKR 56,392.20",
  },
  {
    id: 2,
    src: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/{A8B2E679-6D4A-497F-95C4-A905821952F5}slcmemberrate.jpg",
    type: "Rooms & Suites",
    date: "01 Feb 2021 - 31 Dec 2021",
    title: "Shangri–La Circle Exclusive Member Rate",
    description: "Exclusive Member Rate for Shangri-La Circle member.",
    price: "LKR 50,126.40",
  },
  {
    id: 3,
    src: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/1/C/9/{1C910601-8658-4066-9DBC-6BB50D7DA162}Central4.jpg",
    type: "Dining",
    date: "03 Jan 2024 - 31 Dec 2024",
    title: "Weekend Brunch at Central",
    description:
      "A global gastronomic journey awaits you with our Weekend brunch at Central.",
    price: "LKR 50,126.40",
  },
];

const Offers = () => {
  return (
    <div>
      <p className="offer-heading">Offers</p>
      <div className="offer-card-container">
        <div className="offer-card">
          {offerCards.map((link) => (
            <div key={link.id} className="offer-shadow">
              <img
                className="offer-image"
                src={link.src}
                alt="Sunset in the mountains"
              />
              <div className="offer-sub-columns">
                <div className="offer-type">
                  <h1>{link.type}</h1>
                </div>
                <div>
                  <div className="offer-date">{link.date}</div>
                  <div className="offer-title">{link.title}</div>
                  <div class="offer-description">{link.description}</div>
                  {link.price && (
                    <div class="offer-price-text">
                      From <span class="text-medium">{link.price} </span>
                      Average Per Night
                    </div>
                  )}
                </div>
              </div>
              <div className="offer-button">
                <button className="offers-view-details-button">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;

import React from "react";
import "./Experience.css";

const offerCards = [
  {
    id: 1,
    src: "https://www.hilton.com/im/en/MBJRHHF/16722849/2021-lifestyle-shoot-at-hilton-rose-hall-resort-spa-an-all-inclusive-resort.jpg?impolicy=crop&cw=4874&ch=3333&gravity=NorthWest&xposition=62&yposition=0&rw=640&rh=438",
    text: "Join Hilton Honors & Get Up to 3,000 Points",
  },
  {
    id: 2,
    src: "https://www.hilton.com/im/en/AXAZBOL/18127576/family-pool-day-0199-v1.jpg?impolicy=crop&cw=2000&ch=1367&gravity=NorthWest&xposition=0&yposition=66&rw=640&rh=438",
    text: "Advance Purchase Discount – save up to 17%",
  },
  {
    id: 3,
    src: "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=4874&ch=3333&gravity=NorthWest&xposition=62&yposition=0&rw=640&rh=438",
    text: "Multiply Your Points",
  },
  {
    id: 4,
    src: "https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=4874&ch=3333&gravity=NorthWest&xposition=62&yposition=0&rw=640&rh=438",
    text: "Free Bonus Points at new hotels",
  },
  {
    id: 5,
    src: "https://www.hilton.com/im/en/NoHotel/19032520/shutterstock-1991645033.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=0&rw=1280&rh=854",
    text: "Park & Stay",
  },
  {
    id: 6,
    src: "https://www.hilton.com/im/en/SINORHI/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=1000&gravity=NorthWest&xposition=0&yposition=0&rw=1280&rh=854",
    text: "Experience the Stay",
  },
];

const Experience = () => {
  return (
    <div className="exp">
      <h1 className="experience-heading">Save more, do more</h1>
      <p className="experience-paragraph">
        Choose from our exclusive offers, and get more from your next stay.
      </p>
      <div className="experience-grid-container">
        {offerCards.map((offer) => (
          <div key={offer.id} className="experience-grid">
            <img
              className="experience-image"
              src={offer.src}
              alt={offer.text}
            />
            <div className="image-text-overlay">{offer.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

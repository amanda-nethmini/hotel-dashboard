import React, { useState } from "react";
import "./OurDestinations.css";
import Dropdown from "../../Components/Dropdown/Dropdown";

const options = [
  {
    value: 1,
    label: "Cinnamon Life",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cinnamon-life-home-715x550.jpg",
    description:
      "Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.",
  },
  {
    value: 2,
    label: "Cinnamon Grand Colombo",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/cinnamon-grand-colombo-destination-714x550-DM-Q80.jpeg",
    description:
      "Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!",
  },
  {
    value: 3,
    label: "Cinnamon Lakeside Colombo",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST-cinnaon_lakeside.jpg",
    description:
      "Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo.",
  },
  {
    value: 4,
    label: "Cinnamon Red Colombo",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/cinnamon-red-colombo-destination-714x550-DM.jpg",
    description:
      "South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!",
  },
  {
    value: 5,
    label: "Cinnamon Bentota Beach",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/cinnamon-bentota-beach-destination-714x550-DM.jpg",
    description:
      "Choose Cinnamon Bentota Beach for an opulent stay on Sri Lanka's gold coast. Nestled in the groves of coconut trees is a tastefully designed piece of architecture, an ultimate destination for art and culture enthusiasts!",
  },
  {
    value: 6,
    label: "Cinnamon Bey Beruwala",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/cinnamon-bey-beruwala-destination-714x550-DM.jpg",
    description:
      "Welcome to a food-lover's most sprawling haven. Here's where our different restaurants become the setting for your most indulgent dreams.",
  },
  {
    value: 7,
    label: "Cinnamon Wild Yala",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/wild-detination-home-090921D.jpeg",
    description:
      "Experience the thrill of living around a forest while you sit by a bar overlooking the pool that is also sometimes the tusker’s choice of water-hole.",
  },
  {
    value: 8,
    label: "Cinnamon Velifushi Maldives",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/velifushi-intro-home-DM2-2209.png",
    description:
      "Cinnamon Velifushi Maldives, a one-resort island for sun, activity, relaxation and luxury surrounded by exotic marine life and a swimmable lagoon.",
  },
  {
    value: 9,
    label: "Cinnamon Hakuraa Huraa Maldives",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/hakuraa-detination-home-090921D.jpeg",
    description:
      "Cinnamon Hakuraa Huraa Maldives with its white roofed Water Bungalows set knee-deep in crystal waters of the lagoon is a vision of the stay promised.",
  },
  {
    value: 10,
    label: "Cinnamon Dhonveli Maldives",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/Dhonveli-main-brand-site-DJI-0179-715x550px-301023.jpg",
    description:
      "Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.",
  },
];

const OurDestinations = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 1,
    label: "Cinnamon Life",
    image:
      "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cinnamon-life-home-715x550.jpg",
    description:
      "Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.",
  });

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="destination-container">
        <div className="destination-header">
          <h1>Our Destinations</h1>
        </div>
        <Dropdown
          options={options}
          onSelect={handleSelect}
          defaultSelected={options[1]}
        />
        <div className="image-container2">
          {selectedOption && (
            <img
              className="destination-image"
              src={selectedOption.image}
              alt={selectedOption.label}
            />
          )}
        </div>
        <div>
          {selectedOption && (
            <div className="destination-description">
              <h1 className="dest-title">{selectedOption.label}</h1>
              <p className="dest-text ">{selectedOption.description}</p>
              <button className="dest-button">Discover More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurDestinations;

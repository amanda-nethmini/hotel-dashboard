import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";
import { DatePicker, Input } from "antd";
import { UserOutlined, TagsOutlined } from "@ant-design/icons";
import DropdownV2 from "../Dropdownv2/DropdownV2";
const { RangePicker } = DatePicker;

const Carousel = () => {
  const data = [
    {
      src: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/8/9/{2896CB2D-ED8B-49A9-BDC7-0A93C33482F0}BrandCampaign_SL_Homepage_Theme5_Dress.jpg",
      headerText: "Shangri-La Colombo",
      bodyText:
        "Come with us through the whimsical world of Shangri-La, where your personal paradise awaits.",
      supportText: "Find Your Shangri-La",
    },
    {
      src: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/{20B18195-50BE-4993-9CAE-0A141AFD3747}201126_slcb_homepage1.jpg",
      headerText: "Shangri-La Colombo",
      bodyText:
        "A personal tropical sanctuary set within the heart of the city",
    },
    {
      src: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/4/D/%7B34D215D5-931F-41E3-9164-4C4935192961%7D1.-Premier-Ocean-View-Room.jpg",
      headerText: "Rooms & Suites",
      bodyText: "Tastefully designed with the modern traveler in mind",
      supportText: "Discover more",
    },
    {
      src: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/D/B/1/{DB1D4302-50CB-418F-B870-31F87911B514}1920x800-Shang-Palace.jpg",
      headerText: "Shang Palace",
      bodyText: "Celebrate the art of Chinese cuisine in the heart of Colombo",
      supportText: "Dine with Us",
    },
  ];

  const options = [
    { value: "1", label: "Select Code Type" },
    { value: "2", label: "Corporate" },
    { value: "3", label: "Group" },
    { value: "4", label: "Travel Agency" },
    { value: "5", label: "Promotion" },
    { value: "6", label: "Business Travel Program" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showSpecialCodeModal, setShowSpecialCodeModal] = useState(false);

  const roomModalRef = useRef(null);
  const specialCodeModalRef = useRef(null);

  const toggleModal = (modalStateSetter) => {
    modalStateSetter((prevState) => !prevState);
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        roomModalRef.current &&
        !roomModalRef.current.contains(event.target)
      ) {
        setShowRoomModal(false);
      }
      if (
        specialCodeModalRef.current &&
        !specialCodeModalRef.current.contains(event.target)
      ) {
        setShowSpecialCodeModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + data.length) % data.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % data.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const scolldown = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          className="carousel-image"
          src={data[currentImageIndex].src}
          alt={`Slide ${currentImageIndex}`}
        />
        <button className="carousel-button left" onClick={goToPreviousSlide}>
          <svg
            class="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="carousel-button right" onClick={goToNextSlide}>
          <svg
            class="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="image-text">
        <div className="head">{data[currentImageIndex].headerText}</div>
        <div className="text">{data[currentImageIndex].bodyText}</div>
      </div>
      {data[currentImageIndex].supportText && (
        <div className="support-text-container">
          <div className="support-text">
            {data[currentImageIndex].supportText}
          </div>
          <div className="support-text">
            <svg
              class="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </div>
      )}
      <div className="image-input-container">
        <div onClick={scolldown}>
          <RangePicker className="input" />
        </div>

        <div
          className="box"
          onClick={() => toggleModal(setShowRoomModal)}
          ref={roomModalRef}
        >
          <div className="mr-2">
            <UserOutlined className="w-5 h-5 text-slate-500" />
          </div>
          <div>1 Room, 1 Adult, 0 Children</div>
        </div>

        {showRoomModal && (
          <div className="model-menu" ref={roomModalRef}>
            <div className="model-menu-title">Max. 8 guests per room</div>
            <div className="menu-line">
              <div className="menu-item">Adult(s)</div>
              <div className="menu-item">Children (under 12)</div>
            </div>
            <div className="mt-2 menu-line-input">
              <div className="menu-item-2">Room1</div>
              <div className="menu-item-input">
                <input type="number" min="1" max="8" />
              </div>
              <div className="menu-item-input">
                <input type="number" min="1" max="8" />
              </div>
            </div>
            <hr className="mt-2 mb-2" />
            <button className="button2">Add Room</button>
          </div>
        )}

        <div
          className="box"
          onClick={() => toggleModal(setShowSpecialCodeModal)}
          ref={specialCodeModalRef}
        >
          <div className="mr-2">
            <TagsOutlined className="w-5 h-5 text-slate-500" />
          </div>
          <div>Special Code</div>
        </div>

        {showSpecialCodeModal && (
          <div className="code-model-menu" ref={specialCodeModalRef}>
            <div className="model-menu-title">
              Corporate / Special Rate (Optional)
            </div>

            <div className="mt-2">
              <DropdownV2
                options={options}
                onSelect={handleChange}
                defaultSelected={options[1]}
              />
            </div>
            <div className="mt-2">
              <Input placeholder="Special Code" className="input-2" />
            </div>
          </div>
        )}

        <button className="button1">Search</button>
      </div>
    </div>
  );
};

export default Carousel;

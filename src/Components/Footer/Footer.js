import React from "react";
import "./Footer.css";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import CustomCheckbox from "../CustomCheckbox/Checkbox";

const footerLinks = [
  {
    id: 1,
    text: "Corporate information",
    items: ["Cinnamon Hotels & Resorts", "John Keells Group"],
  },
  {
    id: 2,
    text: "News and Awards",
    items: ["News", "Awards"],
  },
  {
    id: 3,
    text: "Data Privacy & Security Policy",
    items: ["Terms & Conditions", "Privacy Statement"],
  },
  {
    id: 4,
    text: "Blogs",
    items: ["Cinnamon Ublog"],
  },
  {
    id: 5,
    text: "Corporate Governance",
    items: ["CSR"],
  },
  {
    id: 6,
    text: "Get In Touch",
    items: ["info@cinnamonhotels.com", "Hotel Contact Information"],
  },
  {
    id: 7,
    text: "Careers",
    items: ["Careers"],
  },
  {
    id: 8,
    text: "",
    items: [""],
  },
  {
    id: 9,
    text: "Follow Us",
    items: ["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"],
  },
];

const Footer = () => {
  const imgUrl =
    "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/book-bottom.jpg";

  const footerbg =
    "https://www.cinnamonhotels.com/themes/cinnamon/images/footer-bg.png";

  const endImg =
    "https://www.cinnamonhotels.com/themes/cinnamon/images/footer-bg2.png";

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderIcon = (item) => {
    switch (item) {
      case "Facebook":
        return (
          <FacebookFilled style={{ fontSize: "32px", color: "#9a9a9a" }} />
        );
      case "Twitter":
        return (
          <TwitterOutlined style={{ fontSize: "32px", color: "#9a9a9a" }} />
        );
      case "Instagram":
        return (
          <InstagramOutlined style={{ fontSize: "32px", color: "#9a9a9a" }} />
        );
      case "LinkedIn":
        return (
          <LinkedinOutlined style={{ fontSize: "32px", color: "#9a9a9a" }} />
        );
      case "YouTube":
        return <YoutubeFilled style={{ fontSize: "32px", color: "#9a9a9a" }} />;
      default:
        return null;
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-image">
        <img src={imgUrl} alt="footer" />
        <img src={footerbg} alt="footer" className="bgimg" />
        <div className="scroll-container">
          <div className="scroll-up-button" onClick={handleScrollUp}>
            <svg
              className="w-6 h-6 text-white"
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
              <polyline points="6 15 12 9 18 15" />
            </svg>
            <div>Scroll Up</div>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-content-n">
          {footerLinks.map((link) => (
            <div key={link.id} className="footer-links-n">
              <div className="footer-text-n">{link.text}</div>
              {link.items && (
                <>
                  <div className="footer-sublinks-n">
                    {link.id !== 9 &&
                      link.items.map((item, index) => (
                        <div key={index} className="mb-4 footer-sublink-n">
                          {item}
                        </div>
                      ))}
                  </div>

                  {link.items && (
                    <div className="footer-sublinks-n2">
                      {link.id === 9 &&
                        link.items.map((item, index) => (
                          <div key={index} className="footer-sublink-n2">
                            {renderIcon(item) ? renderIcon(item) : item}
                          </div>
                        ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="footer-text-n title-01">
            Get Cinnamon in your inbox
          </div>

          <div className="mt-4 input-container">
            <input
              type="text"
              className="custom-input"
              placeholder="Email Address"
            />
            <button className="custom-button">
              <svg
                class="h-8 w-8 text-neutral-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="mt-10 title-01">
            <CustomCheckbox
              label=" By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the Cinnamon Data Protection Policy.*"
              checked={false}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="footer-end-image">
        <img src={endImg} alt="footer" className="bgimg" />
      </div>
    </div>
  );
};

export default Footer;

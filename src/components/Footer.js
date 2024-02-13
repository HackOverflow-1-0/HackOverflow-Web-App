import React from "react";
import logo from "../assets/img/2024-logo.webp";

import "./Footer.css";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <div className="footer-logo">
            <a href="/#home" alt="Logo">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <p>Follow us on:</p>
          <p>
            <a href="https://ho2.tech/insta" target="_blank" rel="noreferrer">
              <Instagram className="icons instagram" fontSize="large" />
            </a>

            <a
              href="https://github.com/HackOverflow-1-0"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icons twitter" fontSize="large" />
            </a>
            <a
              href="https://ho2.tech/linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="icons linkedin" fontSize="large" />
            </a>
            <a href="https://ho2.tech/twitter" target="_blank" rel="noreferrer">
              <Twitter className="icons linkedin" fontSize="large" />
            </a>
          </p>
        </div>
        <div>
          <p>© 2024 HackOverflow 2.0</p>
          {/* <p>
            {" "}
            <a href="mailto:hackathon@phcet.tech">hackathon@phcet.tech</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

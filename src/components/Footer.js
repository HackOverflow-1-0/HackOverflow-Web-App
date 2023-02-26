import React from "react";
import logo from "../assets/img/hack-overflow-logo.png";

import "./Footer.css";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <div className="footer-logo">
            <img src={logo} />
          </div>
          <p>Follow us on:</p>
          <p>
            <a href="https://phcet.tech/insta" target="_blank">
              <Instagram className="icons instagram" fontSize="large" />
            </a>

            <a href="https://phcet.tech/github" target="_blank">
              <GitHub className="icons twitter" fontSize="large" />
            </a>
            <a href="https://phcet.tech/linkedin" target="_blank">
              <LinkedIn className="icons linkedin" fontSize="large" />
            </a>
            <a href="https://phcet.tech/twitter" target="_blank">
              <Twitter className="icons linkedin" fontSize="large" />
            </a>
          </p>
        </div>
        <div>
          <p>© 2023 HackOverflow 1.0</p>
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

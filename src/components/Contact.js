import { useState } from "react";
import contactImg from "../assets/img/Get-in-touch.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Contact.css";
import { Email } from "@mui/icons-material";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <div className="container text-center">
        <h1 style={{ fontFamily: "Helvetica Bold" }}>Contact Us</h1>
        <div className="row">
          <div className="col">
            <h3>
              <span id="email-icon">
                <Email />
              </span>
              hackoverflow@phcet.tech
            </h3>
            <h3></h3>
          </div>
        </div>
      </div>
    </section>
  );
};

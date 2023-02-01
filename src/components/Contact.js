import { useState } from "react";
import contactImg from "../assets/img/Get-in-touch.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Contact.css";
import pp from "../assets/img/pp.png";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <div className="container">
        <h1 style={{ fontFamily: "Helvetica Bold" }}>Contact Us</h1>
        <div className="row">
          <div className="col-lg-6">
            <img src={contactImg} />
          </div>
          <div className="col-lg-6">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-5 contact-card">
                  <img src={pp} />
                  <h4>Mr.Prathamesh Pandey</h4>
                  <h5>Media Head</h5>
                  <h6>+91 9152117191</h6>
                  <h6>prathamesh@mes.ac.in</h6>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div className="col-6 ho-email text-center">
                hackoverflow1.0@mes.ac.in
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div className="col-6 ho-email text-center">
                For more information
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

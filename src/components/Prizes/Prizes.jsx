import React from "react";
import "./Prizes.css";
import Certificates from "../Certificates/Certificates";

import "dracula-ui/styles/dracula-ui.css";
import { Card, Text } from "dracula-ui";
function Prizes() {
  const defaultOptions = {
    loop: true,
    // autoplay: true,
    // animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    // <Container>
    <>
      <div className="boxesContainer container">
        <div className="prizesHead">Prizes</div>
        <div className="boxesWrapper">
          <div class="box no2">
            <div className="upper_numbers">
              <h1 className="winnerHead">2</h1>
            </div>
            <div class="glass"></div>

            <div class="content">
              <h2>Second Price</h2>
              <p>Cash Prize of TBA</p>
            </div>
          </div>
          <div class="box no1">
            <div className="upper_numbers">
              <h1 className="winnerHead">1</h1>
            </div>
            <div class="glass"></div>
            <div class="content">
              <h2>First Prize</h2>
              <p>Cash Prize of TBA</p>
            </div>
          </div>
          <div class="box no3">
            <div className="upper_numbers">
              <h1 className="winnerHead">3</h1>
            </div>
            <div class="glass"></div>

            <div class="content">
              <h2>Third Prize</h2>
              <p>Cash Prize TBA</p>
            </div>
          </div>
        </div>
      </div>
      <Certificates />
    </>
  );
}

export default Prizes;

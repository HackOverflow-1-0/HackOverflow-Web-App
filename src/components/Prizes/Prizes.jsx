import React from "react";
import "./Prizes.css";
import Lottie from "lottie-react";
import { Container, Row, Col } from "react-bootstrap";
import firstPosition from "../../assets/Lotties/104002-gold-badge.json";
import secondPosition from "../../assets/Lotties/104344-2nd-position.json";
import thirdPosition from "../../assets/Lotties/104345-badge-3rd.json";
import trophyData from "../../assets/Lotties/677-trophy.json";
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
              <p>Total Prize of Worth $15,000 Cash Prize of INR 35,000</p>
            </div>
          </div>
          <div class="box no1">
            <div className="upper_numbers">
              <h1 className="winnerHead">1</h1>
            </div>
            <div class="glass"></div>
            <div class="content">
              <h2>First Prize</h2>
              <p>Total Prize of Worth $12,500 Cash Prize of INR 25,000</p>
            </div>
          </div>
          <div class="box no3">
            <div className="upper_numbers">
              <h1 className="winnerHead">3</h1>
            </div>
            <div class="glass"></div>

            <div class="content">
              <h2>Third Prize</h2>
              <p>Total Prize of Worth $10,000 Cash Prize of INR 15,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prizes;

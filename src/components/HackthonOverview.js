import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import "./HackathonOverview.css";
const HackathonOverview = (props) => {
  // useEffect(()=>{

  // },[TrackVisibility])
  return (
    <Container>
      <h1>Hack OverFlow 1.0</h1>
      <TrackVisibility>
        {({ isVisible }) => {
          <div
            className={isVisible ? "animate__animated animate__fadeIn" : ""}
          ></div>;
        }}
        <Row>
          <Col lg={2}>
            <CountUp start={0} end={1} duration={2.75} suffix="Lakh+" />
            <p>Prize Pool</p>
          </Col>
          <Col lg={2}>
            <CountUp start={0} end={500} duration={2.75} suffix="+" />
            <p>Participants</p>
          </Col>
          <Col lg={2}>
            <CountUp start={0} end={50} duration={2.75} suffix="+" />
            <p>Teams</p>
          </Col>
        </Row>
      </TrackVisibility>
    </Container>
  );
};

export default HackathonOverview;

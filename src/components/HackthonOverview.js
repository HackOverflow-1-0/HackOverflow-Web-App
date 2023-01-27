import { LottiePlayer } from "lottie-react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp, { useCountUp } from "react-countup";
import moneyImg from "../assets/img/92478-money.json";
import "./HackathonOverview.css";
import HackOverflowStrokeAnimation from "./HackOverflowStrokeAnimation";
const HackathonOverview = (props) => {
  const [show, setShow] = useState(false);

  return (
    <section id="hackathon-overview-section">
      <Container>
        <Row>
          <Col>
            <div className="overview-box">
              <div className="hackathon-stroke">
                <HackOverflowStrokeAnimation />
              </div>
              <Row className="counters-div" style={{ marginTop: "340px" }}>
                <Col className="counter" lg={2} sm={2}>
                  <CountUp
                    start={0}
                    end={1}
                    duration={2.75}
                    suffix="Lakh+"
                    enableScrollSpy="true"
                    className="counters"
                  />
                  <p>Prize Pool</p>
                </Col>
                <Col className="counter" lg={2} sm={2}>
                  <CountUp
                    start={0}
                    end={500}
                    duration={2.75}
                    suffix="+"
                    enableScrollSpy="true"
                    className="counters"
                  />
                  <p>Participants</p>
                </Col>
                <Col className="counter" lg={2} sm={2}>
                  <CountUp
                    start={0}
                    end={50}
                    duration={2.75}
                    suffix="+"
                    enableScrollSpy="true"
                    className="counters"
                  />
                  <p>Teams</p>
                </Col>
                <Col className="counter" lg={2} sm={2}>
                  <CountUp
                    start={0}
                    end={8}
                    duration={2.75}
                    suffix="+"
                    enableScrollSpy="true"
                    className="counters"
                  />
                  <p>Themes</p>
                </Col>
                <Col className="counter" lg={2} sm={2}>
                  <CountUp
                    start={0}
                    end={10}
                    duration={2.75}
                    suffix="+"
                    enableScrollSpy="true"
                    className="counters"
                  />
                  <p>Companies</p>
                </Col>
                <Col className="counter" lg={2} sm={2}>
                  <CountUp
                    start={0}
                    end={20}
                    duration={2.75}
                    suffix="+"
                    enableScrollSpy="true"
                    className="counters"
                  />
                  <p>Sponsors</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HackathonOverview;

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp, { useCountUp } from "react-countup";
import groupProgramming from "../assets/img/banner-illustration.png";
import "./HackathonOverview.css";

const HackathonOverview = (props) => {
  const [show, setShow] = useState(false);

  return (
    <section id="hackathon-overview-section">
      <Container>
        <Row>
          <Col lg={6}>
            <img src={groupProgramming} />
          </Col>
          <Col lg={6}>
            <h1 style={{ fontFamily: "Helvetica Bold", marginBottom: "20px" }}>
              What is HackOverflow 1.0?
            </h1>

            <p
              style={{
                fontFamily: "Helvetica",
                fontSize: "1.4rem",
              }}
              className="hackathon-overview-text"
            >
              HackOverflow, a 3-day National level hackathon organized by the
              Department of Computer Engineering at PHCET, brings together
              students from all over the country to showcase their skills and
              creativity in software development. The event provides a platform
              for collaboration, learning, and the development of new solutions
              to real-world problems. The hackathon will be held on our 14-acre
              state-of-the-art campus, where food, accommodation, and all other
              necessary facilities will be provided for the participants. We
              will also be providing Goodies, Tshirt and Placement Opportunities
              with participating companies to all participants. (Job Fair)
            </p>
            <div className="counters-grid">
              <Row className="counters-div">
                <Col className="counter" lg={4} sm={2}>
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
                <Col className="counter" lg={4} sm={2}>
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
                <Col className="counter" lg={4} sm={2}>
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
                <Col className="counter" lg={4} sm={2}>
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
                <Col className="counter" lg={4} sm={2}>
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
                <Col className="counter" lg={4} sm={2}>
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
            <button
              style={{
                background: "#3770ff",
                textAlign: "center",
                color: "white",
              }}
              className="btn"
            >
              Join Discord Channel
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HackathonOverview;

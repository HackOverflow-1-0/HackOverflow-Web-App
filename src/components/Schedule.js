import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import classes from "./Schedule.module.css";

import AlternateTimeline from "./AlternateTimeline";
import { useState } from "react";

export const Schedule = () => {
  const [path, setPath] = useState("offline");
  return (
    <section className="schedule" id="schedule">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Schedule</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Day 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Day 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Day 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="container text-center">
                          <div className={`row ${classes.cardGrid}`}>
                            <h1>Day 1</h1>
                            <div
                              className={`col-lg-12 col-md-4 col-sm-12 ${classes.dayCard}`}
                            >
                              <div
                                id="slideInUp"
                                className={
                                  isVisible
                                    ? "animate__animated animate__slideInUp"
                                    : ""
                                }
                              >
                                <div
                                  className={`container ${classes.pathSelectors} mb-3`}
                                >
                                  <div
                                    className="row"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <div
                                      className={`col-4 ${classes.pathButton2}`}
                                    >
                                      <button
                                        onClick={() => {
                                          setPath("offline");
                                        }}
                                      >
                                        Offline
                                      </button>
                                    </div>
                                    <div
                                      className={`col-4 ${classes.pathButton1}`}
                                    >
                                      <button
                                        onClick={() => {
                                          setPath("online");
                                        }}
                                      >
                                        Online
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {path === "offline" && (
                                  <AlternateTimeline
                                    events={[
                                      "Attendance & ID card collection",
                                      "Lunch",
                                      "Orientation & Opening Ceremony",
                                      "Lab allotment & Setup",
                                      "Hackathon Begins",
                                      "Dinner",
                                      "Networking",
                                    ]}
                                  />
                                )}
                                {path === "online" && (
                                  <AlternateTimeline
                                    events={["Orientation", "Coding Begins"]}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="container text-center">
                          <div className={`row ${classes.cardGrid}`}>
                            <h1>Day 2</h1>
                            <div className={`col-12 ${classes.dayCard}`}>
                              <div
                                id="slideInUp"
                                className={
                                  isVisible
                                    ? "animate__animated animate__slideInUp"
                                    : ""
                                }
                              >
                                <div
                                  className={`container ${classes.pathSelectors} mb-3`}
                                >
                                  <div className="row">
                                    <div
                                      className={`col-6 ${classes.pathButton2}`}
                                    >
                                      <button
                                        onClick={() => {
                                          setPath("offline");
                                        }}
                                      >
                                        Offline
                                      </button>
                                    </div>
                                    <div
                                      className={`col-6 ${classes.pathButton1}`}
                                    >
                                      <button
                                        onClick={() => {
                                          setPath("online");
                                        }}
                                      >
                                        Online
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {path === "offline" && (
                                  <AlternateTimeline
                                    events={[
                                      "Attendance & ID card collection",
                                      "Lunch",
                                      "Orientation & Opening Ceremony",
                                      "Lab allotment & Setup",
                                      "Hackathon Begins",
                                      "Dinner",
                                      "Networking",
                                    ]}
                                  />
                                )}
                                {path === "online" && (
                                  <AlternateTimeline
                                    events={["Orientation", "Coding Begins"]}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="container text-center">
                          <div className={`row ${classes.cardGrid}`}>
                            <h1>Day 3</h1>
                            <div className={`col-12 ${classes.dayCard}`}>
                              <div
                                id="slideInUp"
                                className={
                                  isVisible
                                    ? "animate__animated animate__slideInUp"
                                    : ""
                                }
                              >
                                <div
                                  className={`container ${classes.pathSelectors} mb-3`}
                                >
                                  <div className="row">
                                    <div
                                      className={`col-6 ${classes.pathButton2}`}
                                    >
                                      <button
                                        onClick={() => {
                                          setPath("offline");
                                        }}
                                      >
                                        Offline
                                      </button>
                                    </div>
                                    <div
                                      className={`col-6 ${classes.pathButton1}`}
                                    >
                                      <button
                                        onClick={() => {
                                          setPath("online");
                                        }}
                                      >
                                        Online
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {path === "offline" && (
                                  <AlternateTimeline
                                    events={[
                                      "Attendance & ID card collection",
                                      "Lunch",
                                      "Orientation & Opening Ceremony",
                                      "Lab allotment & Setup",
                                      "Hackathon Begins",
                                      "Dinner",
                                      "Networking",
                                    ]}
                                  />
                                )}
                                {path === "online" && (
                                  <AlternateTimeline
                                    events={["Orientation", "Coding Begins"]}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

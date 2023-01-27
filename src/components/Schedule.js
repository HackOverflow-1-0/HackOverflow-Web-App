import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import classes from "./Schedule.module.css";
import LineCanvas from "./LineCanvas";
import { Route, Routes } from "react-router";
import AlternateTimeline from "./AlternateTimeline";

export const Schedule = () => {
  return (
    <section className="schedule" id="schedule">
      <LineCanvas>
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
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
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
      </LineCanvas>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

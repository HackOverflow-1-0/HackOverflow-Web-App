import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/hack-overflow-logo.png";
import { HashLink } from "react-router-hash-link";
import ProgressBar from "./progressBar/ProgressBar";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#schedule"
              className={
                activeLink === "schedule" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("schedule")}
            >
              Schedule
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              className={
                activeLink === "sponsors" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("sponsors")}
            >
              Sponsors
            </Nav.Link>
            <Nav.Link
              href="#aboutSection"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {/* <div className="social-icon">
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div> */}
            <HashLink to="#connect">
              <button className="vvd">
                <span>Brochure</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
      <ProgressBar/>
    </Navbar>
    </>
  );
};

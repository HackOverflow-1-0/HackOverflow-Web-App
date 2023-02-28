import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/HOmain1-purple.png";
import ProgressBar from "./progressBar/ProgressBar";
// import MobileNavbar from "./MobileNavbar/MobileNavbar";

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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
                  activeLink === "schedule"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("schedule")}
              >
                Schedule
              </Nav.Link>
              <Nav.Link
                href="#sponsors"
                className={
                  activeLink === "sponsors"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("sponsors")}
              >
                Sponsors
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <button>
                <span>
                  <a
                    rel="noreferrer"
                    href="https://phcet.tech/pdf"
                    target="_blank"
                  >
                    Brochure
                  </a>
                </span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
        <ProgressBar />
      </Navbar>
    </>
  );
};

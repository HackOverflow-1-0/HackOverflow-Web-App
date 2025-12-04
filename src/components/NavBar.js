import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ProgressBar from "./progressBar/ProgressBar";
import { Link, useLocation } from "react-router-dom";

//CDN url for logo and blue star logo
// const logo = "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/assets/logos/3.0%20logo%202025.png";
// const blueStarLogo = "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/assets/brands/Blue%20Star%20Sponsor%20.png"; // Add the path to the Blue Star logo

// Local url for logo and blue star logo
// import logo from "../assets/img/3.0 logo 2025.png";
import logo from "../assets/img/HO 4.0 assets/HO 4.0 Logo.png";
import blueStarLogo from "../assets/img/Blue Star Sponsor .png";

// Add these custom styles at the top of the file
const mobileStyles = {
  mobileLogo: {
    maxHeight: '50px',
    width: 'auto'
  },
  mobileBlueStarLogo: {
    maxHeight: '45px',
    width: 'auto',
    marginLeft: '10px'
  },
  mobileBrochureBtn: {
    fontSize: '0.8rem',
    padding: '0.3rem 0.8rem',
    marginLeft: '10px'
  },
  coPoweredText: {
    fontSize: '0.7rem',
    color: '#fff',
    marginBottom: '2px',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    opacity: 0.9,
    letterSpacing: '0.5px'
  }
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  useEffect(() => {
    // Update active link based on location.pathname
    const currentPath = location.pathname.toLowerCase();
    setActiveLink(currentPath === "/" ? "home" : currentPath.substr(1));
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLinkHref = (section) => {
    return location.pathname === "/" ? `/#${section}` : `/#${section}`;
  };

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
            <a href="/#home" alt="Logo">
              <img
                src={logo}
                alt="Logo"
                id="logo"
                style={isMobile ? mobileStyles.mobileLogo : {}}
              />
            </a>
            {/* Add Blue Star sponsor logo with Co-Powered By text above */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: isMobile ? '10px' : '25px'
            }}>
              <div style={isMobile ? mobileStyles.coPoweredText : {
                fontSize: '0.8rem',
                color: '#fff',
                marginBottom: '4px',
                fontFamily: 'Poppins, sans-serif',
                opacity: 0.9,
                letterSpacing: '0.5px'
              }}>
                Co-Powered By
              </div>
              <a href="https://www.bluestarindia.com/" target="_blank" rel="noreferrer" alt="Blue Star">
                <img
                  src={blueStarLogo}
                  alt="Blue Star Logo"
                  id="blue-star-logo"
                  style={isMobile ? mobileStyles.mobileBlueStarLogo : { height: '60px' }}
                />
              </a>
            </div>
          </Navbar.Brand>

          {/* New button "Brochure mobile button" only shown in mobile view */}
          {/* <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              fontWeight: "300",
              ...(isMobile ? mobileStyles.mobileBrochureBtn : {})
            }}
            className="hover:bg-[#5B8F81] text-white font-bold rounded d-md-none ml-auto"
            onClick={() => window.open("https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/Brochure/publicityBrochure.pdf", "_blank")}
          >
            Brochure
          </button> */}
          
          <a
            href="/docs/publicityBrochure.pdf"
            download="HackOverflow_4.0_Brochure.pdf"
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              fontWeight: "300",
              textDecoration: "none",
              display: "inline-block",
              ...(isMobile ? mobileStyles.mobileBrochureBtn : {})
            }}
            className="hover:bg-[#5B8F81] text-white font-bold rounded d-md-none ml-auto"
          >
            Brochure
          </a>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href={getLinkHref("home")}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("schedule")}
                className={
                  activeLink === "schedule"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("schedule")}
              >
                Schedule
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("themes")}
                className={
                  activeLink === "themes" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("themes")}
              >
                Theme
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("sponsors")}
                className={
                  activeLink === "sponsors"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("sponsors")}
              >
                Sponsors
              </Nav.Link>

              <Nav.Link
                href={getLinkHref("about")}
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("about")}
              >
                About
              </Nav.Link>

              {/* <Nav.Link
                className={
                  activeLink === "team" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("team")}
              >
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/team"
                  className={
                    activeLink === "team" ? "active navbar-link" : "navbar-link"
                  }
                >
                  Teams
                </Link>
              </Nav.Link> */}

              <Nav.Link
                className={
                  activeLink === "gallery"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("gallery")}
              >
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/gallery"
                  className={
                    activeLink === "gallery"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                >
                  Gallery
                </Link>
              </Nav.Link>
            </Nav>
            <div className="navbar-text flex justify-end">
              <a
              // href="https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/Brochure/publicityBrochure.pdf"
              //   target="_blank"
              //   rel="noreferrer"
                href="/docs/publicityBrochure.pdf"
                download="HackOverflow_4.0_Brochure.pdf"
              >
                <button className="bg-[#9B96B3] hover:bg-[#5B8F81] text-white font-bold py-2 px-4 rounded">
                  Brochure
                </button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
        <ProgressBar />
      </Navbar>
    </>
  );
};

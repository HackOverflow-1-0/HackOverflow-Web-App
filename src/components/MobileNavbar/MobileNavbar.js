import { Flare, Home, Info, Schedule, Category } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./MobileNavbar.css";

const MobileNavbar = (props) => {
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // Update active link based on location.pathname
    const currentPath = location.pathname.toLowerCase();
    setActiveLink(currentPath === "/" ? "home" : currentPath.substr(1));
  }, [location.pathname]);

  const getLinkHref = (section) => {
    return location.pathname === "/" ? `/#${section}` : `/#${section}`;
  };

  const [value, setValue] = useState("home");
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="bottom-navbar"
      style={{ backgroundColor: "#1b1c27" }}
    >
      <Nav.Link href={getLinkHref("home")}>
        <BottomNavigationAction
          label="Home"
          icon={<Home style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
      <Nav.Link href={getLinkHref("schedule")}>
        <BottomNavigationAction
          label="Schedule"
          icon={<Schedule style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
      {/* <Nav.Link href={getLinkHref("themes")}>
        <BottomNavigationAction
          label="Themes"
          icon={<Category style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link> */}
      <Nav.Link href={getLinkHref("sponsors")}>
        <BottomNavigationAction
          label="Sponsors"
          icon={<Flare style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
      <Nav.Link href={getLinkHref("about")}>
        <BottomNavigationAction
          label="About"
          icon={<Info style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
    </BottomNavigation>
  );
};
export default MobileNavbar;

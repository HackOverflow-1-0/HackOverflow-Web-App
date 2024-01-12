import { Flare, Home, Info, Schedule, Category } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { Nav } from "react-bootstrap";

import "./MobileNavbar.css";
const MobileNavbar = (props) => {
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
      <Nav.Link href="#home">
        <BottomNavigationAction
          label="Home"
          icon={<Home style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
      <Nav.Link href="#schedule">
        <BottomNavigationAction
          label="Schedule"
          icon={<Schedule style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
      <Nav.Link href="#themes">
        <BottomNavigationAction
          label="Themes"
          icon={<Category style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
      <Nav.Link href="#sponsors">
        <BottomNavigationAction
          label="Sponsors"
          icon={<Flare style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
      <Nav.Link href="#about">
        <BottomNavigationAction
          label="About"
          icon={<Info style={{ fill: "#aa367c" }} />}
        />
      </Nav.Link>
    </BottomNavigation>
  );
};
export default MobileNavbar;

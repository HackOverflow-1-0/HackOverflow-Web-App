import { Flare, Home, Info, Schedule } from "@mui/icons-material";
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
    >
      <Nav.Link href="#home">
        <BottomNavigationAction label="Home" icon={<Home style={{backgroundColor:"#aa367c"}} />} />
      </Nav.Link>
      <Nav.Link href="#schedule">
        <BottomNavigationAction label="Schedule" icon={<Schedule />} />
      </Nav.Link>
      <Nav.Link href="#sponsors">
        <BottomNavigationAction label="Sponsors" icon={<Flare />} />
      </Nav.Link>
      <Nav.Link href="#about">
        <BottomNavigationAction label="About" icon={<Info />} />
      </Nav.Link>
    </BottomNavigation>
  );
};
export default MobileNavbar;

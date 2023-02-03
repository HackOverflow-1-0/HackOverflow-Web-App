import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { Schedule } from "./components/Schedule";
import HackathonOverview from "./components/HackthonOverview";
import { Fragment, useEffect, useState } from "react";
import Themes from "./components/Themes";
import { Sponsors } from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Prizes from "./components/Prizes/Prizes";
import About from "./components/About";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <Fragment>
      <NavBar />
      <Banner />
      <Prizes />
      <Schedule />
      <Themes />
      <Sponsors />
      <HackathonOverview />
      <FAQ />
      <Contact />
      <About />
      <Footer />
      {windowSize[0] < 600 && <MobileNavbar />}
    </Fragment>
  );
}

export default App;

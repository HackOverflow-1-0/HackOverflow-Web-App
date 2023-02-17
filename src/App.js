import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
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
import CollegeClub from "./components/CollegeClub/CollegeClub";
import AppFeature from "./components/AppFeature/AppFeature";
import Register from "./components/Register/Register";
import RegisterMobile from "./components/Register/RegisterMobile";
import { PreLoader } from "./components/PreLoader/PreLoader";

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
      {/* <PreLoader /> */}
      <NavBar />
      <Banner />
      {windowSize[0] > 1200 ? <Register /> : <RegisterMobile />}
      <HackathonOverview />
      <Prizes />
      <Schedule />
      <Themes />
      <AppFeature />
      <Sponsors />
      <FAQ />
      <About />
      <CollegeClub />
      <Footer />
      {windowSize[0] < 600 && <MobileNavbar />}
    </Fragment>
  );
}

export default App;

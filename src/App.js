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
import PreLoader from "./components/PreLoader/PreLoader";
import ScrollToTop from "react-scroll-to-top";
import InstaFeeds from "./components/InstaDisplay/InstaFeeds";

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && windowSize[0] > 728 ? (
        <PreLoader />
      ) : (
        <Fragment>
          <ScrollToTop
            className="scroll-to-top"
            smooth
            color="#fff"
            style={{
              backgroundColor: "#891A98",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              // boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
            }}
          />
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
          <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
          <Footer />
          {windowSize[0] < 600 && <MobileNavbar />}
        </Fragment>
      )}
    </>
  );
}

export default App;

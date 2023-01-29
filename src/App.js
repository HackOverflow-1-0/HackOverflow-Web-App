import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Schedule } from "./components/Schedule";
import HackathonOverview from "./components/HackthonOverview";

import About from "./components/About";
import { Fragment } from "react";
import HighlightText from "./components/HighlightText";
import Themes from "./components/Themes";
import { Sponsors } from "./components/Sponsors";
import { Winners } from "./components/WinnerSection/Winners";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <Winners />
      <Schedule />
      <Themes />
      <Sponsors />
      <HackathonOverview />
      <HighlightText />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Schedule } from "./components/Schedule";
import HackathonOverview from "./components/HackthonOverview";

import { Fragment } from "react";

import Themes from "./components/Themes";
import { Sponsors } from "./components/Sponsors";
import { Winners } from "./components/WinnerSection/Winners";
import FAQ from "./components/FAQ";
import Prizes from "./components/Prizes/Prizes";

function App() {
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

      <Footer />
    </Fragment>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { Schedule } from "./components/Schedule";
import HackathonOverview from "./components/HackthonOverview";
import { Fragment } from "react";
import Themes from "./components/Themes";
import { Sponsors } from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Prizes from "./components/Prizes/Prizes";
import About from "./components/About";

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
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;

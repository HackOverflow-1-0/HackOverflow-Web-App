import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Schedule } from "./components/Schedule";
import HackathonOverview from "./components/HackthonOverview";
import { env } from "process";
import About from "./components/About";
import { Fragment } from "react";
import { Route, Routes } from "react-router";
import AlternateTimeline from "./components/AlternateTimeline";

function App() {
  return (
    <Fragment>
      {/* <Routes>
        <Route path="/home" element={<Banner />} />
        <Route path="/prizes" element={<Skills />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/summa" element={<HackathonOverview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Footer />} />
      </Routes> */}
      <NavBar />
      <Banner />
      <Skills />
      <Schedule />
      <HackathonOverview />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;

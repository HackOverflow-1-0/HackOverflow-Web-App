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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Schedule />
      <HackathonOverview />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;

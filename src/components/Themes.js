import "./Themes.css";
import agriculture from "../assets/img/Farmer.gif";
import health from "../assets/img/OnlineDoctor.gif";
import finance from "../assets/img/Financeapp.gif";
import education from "../assets/img/Nerd.gif";
import blockchain from "../assets/img/BitcoinP2P.gif";
import ai from "../assets/img/Artificial-intelligence.gif";
import environment from "../assets/img/Nature.gif";
const Themes = () => {
  return (
    <section id="themes-section">
      <div className="container">
        <h1>Themes</h1>
        <div class="absolute h-[2px] bg-[#7b1072] w-56" />
        <div className="row">
          <div className="col-lg-3 themes-tiles">
            <img src={agriculture} />
            <figcaption>Agriculture</figcaption>
          </div>
          <div className="col-lg-3 themes-tiles">
            <img src={health} />
            <figcaption>Health</figcaption>
          </div>
          <div className="col-lg-3 themes-tiles">
            <img src={finance} />
            <figcaption>Finance</figcaption>
          </div>
          <div className="col-lg-3 themes-tiles">
            <img src={education} />
            <figcaption>Education</figcaption>
          </div>
          <div className="col-lg-3 themes-tiles">
            <img src={blockchain} />
            <figcaption>Blockchain</figcaption>
          </div>
          <div className="col-lg-3 themes-tiles">
            <img src={ai} />
            <figcaption>Artificial Intelligence</figcaption>
          </div>
          <div className="col-lg-3 themes-tiles">
            <img src={environment} />
            <figcaption>Environment</figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Themes;

import app1 from "../../assets/img/app_1.png";
import app2 from "../../assets/img/app_2.png";
import "./AppFeature.css";
import {motion} from "framer-motion";

const AppFeature = () => {
  return (
    <>
      <section id="app-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="side-text1">Download our app on Play Store.</h1>
            </div>
            <div className="col-6">
              <div
                className="app-preview1"
              >
                <img src={app1} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="app-preview2">
                <img src={app2} />
              </div>
            </div>
            <div className="col-6">
              <h1 className="side-text2">
                <p>
                  Get all info related to Hackathon. Get digital personalized
                  digital id.
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AppFeature;

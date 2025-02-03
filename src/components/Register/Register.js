import "./Register.css";
import DevFolio from "../DevFolio/DevFolioButton";
import devfolio from "../../assets/img/dev_folio_btn.png";

import { Button } from "@mui/material";

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <h1 className="text-center register-h1" id="green-yellow" >Register Now!!</h1>
        <div className="row ">
          <div className="col">
            <div className="row">
              {/* <div className="col-6">
                <div className="online-registerations">
                  <h2 className="online-tag">Online</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnSvgjs="http://svgjs.dev/svgjs"
                    viewBox="0 0 800 800"
                    id="arrow-left"
                  >
                    <g
                      stroke-width="10"
                      stroke="#967fd6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="rotate(100, 400, 400)"
                    >
                      <path
                        d="M232.5 232.5Q376.5 292.5 400 400Q482.5 296.5 567.5 567.5 "
                        marker-end="url(#SvgjsMarker1978)"
                      ></path>
                    </g>
                    <defs>
                      <marker
                        markerWidth="10"
                        markerHeight="10"
                        refX="5"
                        refY="5"
                        viewBox="0 0 10 10"
                        orient="auto"
                        id="SvgjsMarker1978"
                      >
                        <polyline
                          points="0,5 5,2.5 0,0"
                          fill="none"
                          stroke-width="1.6666666666666667"
                          stroke="#967fd6"
                          stroke-linecap="round"
                          transform="matrix(1,0,0,1,1.6666666666666667,2.5)"
                          stroke-linejoin="round"
                        ></polyline>
                      </marker>
                    </defs>
                  </svg>
                  <div className="dev-folio">
                    <DevFolio />
                  </div>
                </div>
              </div> */}
              <div className="col-6">
                <div className="offline-registerations">
                  {/* <h2 className="offline-tag">Offline</h2> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnSvgjs="http://svgjs.dev/svgjs"
                    viewBox="0 0 800 800"
                    id="arrow-right"
                  >
                    <g
                      stroke-width="15"
                      stroke="#aa458f"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="matrix(1,0,0,1,113,-33)"
                    >
                      <path
                        d="M238.65570831298828 225.5Q139.65570831298828 506.5 413.1557083129883 400Q301.6557083129883 499.5 587.6557083129883 574.5 "
                        marker-end="url(#SvgjsMarker1919)"
                      ></path>
                    </g>
                    <defs>
                      <marker
                        markerWidth="10"
                        markerHeight="10"
                        refX="5"
                        refY="5"
                        viewBox="0 0 10 10"
                        orient="auto"
                        id="SvgjsMarker1919"
                      >
                        <polyline
                          points="0,5 5,2.5 0,0"
                          fill="none"
                          stroke-width="1.6666666666666667"
                          stroke="#aa458f"
                          stroke-linecap="round"
                          transform="matrix(1,0,0,1,1.6666666666666667,2.5)"
                          stroke-linejoin="round"
                        ></polyline>
                      </marker>
                    </defs>
                  </svg>
                  <div className="offline-register-btn">
                    <a
                      href="https://phcet.tech/offline"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          background: "#aa367c",
                          height: "44px",
                          width: "312px",
                          fontFamily: "Poppins",
                        }}
                      >
                        Register Offline
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;

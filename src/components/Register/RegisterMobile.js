import DevFolio from "../DevFolio/DevFolioButton";
import { Button } from "@mui/material";
import "./RegisterMobile.css";
const RegisterMobile = () => {
  return (
    <div className="container text-center">
      <h1 className="register-h1 my-3">Register Now</h1>
      <div className="row">
        <div className="col">
          <h2 className="online-h2 my-2">Online</h2>
          <div className="online-holder my-2">
            <DevFolio />
          </div>
        </div>
        <div className="col">
          <h2 className="offline-h2 my-2">Offline</h2>
          <div className="offline-holder my-2">
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
                  fontFamily: "Helvetica Bold",
                }}
              >
                Register offline
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterMobile;

import DevFolio from "../DevFolio/DevFolioButton";
import { Button } from "@mui/material";
import "./RegisterMobile.css";
const RegisterMobile = () => {
  return (
    <div className="container text-center">
      <h1 className="register-h1">Register Now</h1>
      <div className="row">
        <div className="col">
          <h2 className="online-h2">Online</h2>
          <div className="online-holder">
            <DevFolio />
          </div>
        </div>
        <div className="col">
          <h2 className="offline-h2">Offline</h2>
          <div className="offline-holder">
            <Button variant="contained">Register offline</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterMobile;

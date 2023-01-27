import * as React from "react";
// import { updateSampleSection } from "../common/sample-base";
import "../css/TrophyCard.css";
import colorSharp from "../assets/img/color-sharp.png";
// tslint:disable:max-line-length
// *  Sample for CSS avatar component
function TrophyCard() {
    return (<div className="control-pane">
      <div className="sample_container card_sample">
        {/* <!-- Card Component --> */}
        <div className="e-card e-custom-card">
          <div className="e-card-header">
            {/* <!-- xLarge Circle Avatar--> */}
            <div className="e-avatar e-avatar-circle e-avatar-xlarge">
              <img src={colorSharp} alt="profile_pic"/>
            </div>
            &nbsp;
          </div>
          <div className="e-card-header">
            <div className="e-card-header-caption center">
              <div className="e-card-header-title name">Laura Callahan</div>
              <div className="e-card-sub-title">Sales Coordinator</div>
            </div>
          </div>
          <div className="e-card-content">
            <p className="avatar-content">
              Laura received a BA in psychology from the University of
              Washington. She has also completed a course in business French.
              She reads and writes French.
            </p>
          </div>
        </div>
      </div>


    </div>);
}
export default TrophyCard;
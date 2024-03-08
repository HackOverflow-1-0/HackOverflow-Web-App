import React from "react";
import "./FutureCityAsset.css";
import Lottie from "lottie-react";
import animationData from "../../assets/Lotties/SmartCity.json";

const FutureCityAsset = () => {
  return (
    <div className="flex flex-row items-center justify-center FutureCitypreloader">
      <div className="flex flex-col items-center justify-center gap-2">
        <Lottie
          className="w-auto h-auto sm:w-[70rem] sm:h-[29rem]"
          animationData={animationData}
        />
      </div>
    </div>
  );
};

export default FutureCityAsset;

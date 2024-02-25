import React from "react";
import "./PreLoader.css";
import Lottie from "lottie-react";
import animationData from "../../assets/Lotties/preloader2.json";

const PreLoader = () => {
  return (
    <div className="flex flex-row items-center justify-center preloader">
      <div className="flex flex-col items-center justify-center">
        <Lottie className="w-[50rem] h-72" animationData={animationData} />
        {/* <p
          id="orange-pink"
          className="text-[30px] sm:text-[36px] md:text-[35px] lg:text-[45px]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Loading...
        </p> */}
      </div>
    </div>
  );
};

export default PreLoader;

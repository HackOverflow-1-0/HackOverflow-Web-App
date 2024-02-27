import React from "react";
import "./PreLoader.css";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../../assets/Lotties/preloader2.json";

const PreLoader = () => {
  return (
    <div className="flex flex-row items-center justify-center preloader">
      <div className="flex flex-col items-center justify-center gap-2">
        <Lottie className="w-[50rem] h-72" animationData={animationData} />
        <p
          // id="orange-pink"
          className="flex text-[20px] sm:text-[25px] md:text-[28px] lg:text-[35px]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {/* Loading HackOverflow Universe...{" "} */}
          {/* <span id="green-yellow"> */}
          <span className="w-[24rem] sm:w-fit">
            <Typewriter
              // words={["Initialize💡", "Compile🛠️", "Debug🔍", "Deploy🚀"]}
              words={[
                "Loading the innovation hub.🌟",
                "Crafting HackOverflow tech.🌐🌌",
                "Preparing for code revolution.💻",
                "Building the future at HackOverflow 2.0.🚀",
                "Assembling the coding cosmos.🌌",
                "Fueling the coding galaxy.🌟",
                "Empowering developers worldwide.💪",
                "Shaping the digital frontier.🌐",
                "Harnessing the power of code.⚡",
                "Unlocking tech potiential @HackOverflow.🔓",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorBlinking="true"
              cursorColor="inherit"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              // onType={handleType}
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default PreLoader;

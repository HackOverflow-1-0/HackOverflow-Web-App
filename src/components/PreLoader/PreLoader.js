import React from "react";
import video from "../../assets/videos/fast.webm";
import "./PreLoader.css";

const PreLoader = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // }

  return (
    // <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <div>
      <video
        className="preloadervideo"
        autoPlay
        loop
        muted
        style={{ objectFit: "cover" }}
      >
        <source src={video} type="video/webm" />
      </video>
      {/* <Typewriter
        words={['Welcome to Hack-OverFlow!!!', 'Think!!', 'Code!!', 'Innovate!!']}
        loop={5}
        cursor
        cursorStyle='_'
        typeSpeed={20}
        deleteSpeed={50}
        delaySpeed={1000}
        style={{ fontSize: '42px', textAlign: 'center'}}
      /> */}
      {/* <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      /> */}
      {/* <h1>loading...</h1> */}
      {/* <video src={video}></video> */}
    </div>
  );
};

export default PreLoader;

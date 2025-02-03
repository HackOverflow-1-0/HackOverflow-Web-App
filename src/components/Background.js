import React from "react";
import backgroundVideoDesktop from "../assets/img/bg/bg-desktop.webm";
import backgroundVideoMobile from "../assets/img/bg/bg-phone.webm";
import "./Background.css";

const Background = (props) => {
  const isMobile = window.innerWidth < 450;

  const handleRegisterButtonClick = () => {
    // Replace 'your_registration_link' with the actual registration link
    window.open("https://ho2.tech/register", "_blank");
  };

  return (
    <>
      {/* <video
        autoPlay
        loop
        muted
        className="relative bg-video"
        id="home"
        style={{
          objectFit: "cover",
          ...(isMobile && { width: "100%", height: "80vh" }),
          maxWidth: "100%",
        }}
      >
        <source
          src={isMobile ? backgroundVideoMobile : backgroundVideoDesktop}
          type="video/webm"
        />
      </video> */}
      <div className="absolute top-0 left-0 right-0 background-video">
        {props.children}
      </div>
      <div className="absolute top-[35rem] sm:top-[18rem] md:top-[79rem] lg:top-[30rem] xl:top-[36rem] 2xl:top-[45rem] left-0 right-0 flex justify-center">
        <button  
          className="button-86"
          onClick={handleRegisterButtonClick}
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
            
          
          
        
          }}
        >
          Registrations Open!
        </button>
      </div>
    </>
  );
};

export default Background;

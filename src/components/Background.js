import React from "react";
import backgroundVideoDesktop from "../assets/img/bg/bg-desktop.webm";
import backgroundVideoMobile from "../assets/img/bg/bg-phone.webm";
import "./Background.css";

const Background = (props) => {
  const isMobile = window.innerWidth < 450;

  const handleRegisterButtonClick = () => {
    // Replace 'your_registration_link' with the actual registration link
    window.open('https://ho2.tech/register', '_blank');
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="relative bg-video"
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
      </video>
      <div className="absolute top-[38rem] sm:top-[65rem] md:top-[79rem] lg:top-[30rem] xl:top-[36rem] 2xl:top-[40rem] left-0 right-0 flex justify-center">
        <button
          className="button-86"
          role="button"
          onClick={handleRegisterButtonClick}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default Background;

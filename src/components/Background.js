import React from "react";
import backgroundVideoDesktop from "../assets/img/bg/bg-desktop.webm";
import backgroundVideoMobile from "../assets/img/bg/bg-phone.webm";
import "./Background.css";

const Background = (props) => {
  const isMobile = window.innerWidth < 450;

  const handleRegisterButtonClick = () => {
    // Replace 'your_registration_link' with the actual registration link
    window.open("https://forms.gle/C4fr1BQKXDFo3FJa6", "_blank");
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="relative bg-video"
        id="home"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          maxWidth: "2560px",
          maxHeight: "1400px",
        }}
      >
        <source
          src={isMobile ? backgroundVideoMobile : backgroundVideoDesktop}
          type="video/webm"
        />
      </video>
      <div className="absolute top-0 left-0 right-0 background-video">
        {props.children}
      </div>
      <div className="absolute top-10 left-0 right-0 flex justify-center">
        <button  
          className="button-86"
          onClick={handleRegisterButtonClick}
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
            marginTop: '10px', // Move the button downwards by 10px
          }}
        >
          Registrations Open!
        </button>
      </div>
    </>
  );
};

export default Background;
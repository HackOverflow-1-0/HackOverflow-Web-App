import backgroundVideoDesktop from "../assets/img/bg/bg-desktop.webm";
import backgroundVideoMobile from "../assets/img/bg/bg-phone.webm";
import "./Background.css";

const Background = (props) => {
  const isMobile = window.innerWidth < 450;

  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="relative bg-video"
        style={{
          objectFit: "cover",
          ...(isMobile && { width: "100%", height: "80vh" }), // Set width and height for mobile
          maxWidth: "100%", // Set max-width to 100% to prevent the video from extending beyond the screen width
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
    </>
  );
};

export default Background;

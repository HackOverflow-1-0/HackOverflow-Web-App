import backgroundVideo from "../assets/img/vid2.mp4";
import "./Background.css";
const Background = (props) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="relative bg-video"
        style={{ objectFit: "cover" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 right-0 background-video">
        {props.children}
      </div>
    </>
  );
};
export default Background;

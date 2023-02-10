import backgroundVideo from "../assets/img/websiteback.mp4";
const Background = (props) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="relative"
        // style={{ postion: "realtive", objectFit: "cover", zIndex: "-1" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 right-0">{props.children}</div>
    </>
  );
};
export default Background;

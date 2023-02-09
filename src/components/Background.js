import backgroundVideo from "../assets/img/websiteback.mp4";
const Background = (props) => {
  return (
    <video autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4" />
      {props.children}
    </video>
  );
};
export default Background;

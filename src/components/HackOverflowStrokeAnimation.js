import "./HackOverflowStrokeAnimation.css";
const HackOverflowStrokeAnimation = (props) => {
  return (
    <>
      <svg viewBox="0 0 1200 800" id="ho1">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="35%" class="text--line">
            Hack
          </text>
          <text text-anchor="middle" x="50%" y="65%" class="text--line">
            Overflow
          </text>
          <text text-anchor="middle" x="50%" y="95%" class="text--line">
            1.0
          </text>
        </symbol>

        <g class="g-ants">
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
        </g>
      </svg>
    </>
  );
};
export default HackOverflowStrokeAnimation;

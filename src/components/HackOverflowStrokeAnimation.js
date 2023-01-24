import './HackOverflowStrokeAnimation.css'
const HackOverflowStrokeAnimation=(props)=>{
    return(
    <>
    
    <svg viewBox="0 0 1200 800">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="35%" class="text--line">
            Hack
          </text>
          <text text-anchor="middle" x="50%" y="68%" class="text--line2">
            Overflow
          </text>
          <text text-anchor="middle" x="50%" y="101%" class="text--line2">
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
      </>)
}
export default HackOverflowStrokeAnimation;
// import "./FutureCityTheme.css";
// SDGS IMPORT
import Teampage from "../Teams/Teams";

const AppTeam = () => {
  // const [click, setClick] = useState(false);
  // const [hover, setHover] = useState(false);
  return (
    <div className="container" id="themes">
      <h1
        id="green-yellow"
        className="text-center text-[45px] capitalize cursor-pointer"
        style={{
          fontFamily: "Poppins,sans-serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Judges
      </h1>

      <section className="">
        <Teampage />
      </section>
    </div>
  );
};

export default AppTeam;

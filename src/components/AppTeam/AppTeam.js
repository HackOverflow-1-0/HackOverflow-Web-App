// import "./FutureCityTheme.css";
// SDGS IMPORT
import Teampage from "../Teams/Teams";

const AppTeam = () => {
  // const [click, setClick] = useState(false);
  // const [hover, setHover] = useState(false);
  return (
    <div className="container pt-2" id="judges">
      <h1
        id="green-yellow"
        className="pb-2 text-center text-[45px] capitalize cursor-pointer"
        style={{
          fontFamily: "Poppins,sans-serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Judges of HackOverflow 2.0
      </h1>

      <section className="">
        <Teampage />
      </section>
    </div>
  );
};

export default AppTeam;

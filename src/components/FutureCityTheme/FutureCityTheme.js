import "./FutureCityTheme.css";
// SDGS IMPORT
import FutureCityAsset from "./FutureCityAsset";

const FutureCityTheme = () => {
  // const [click, setClick] = useState(false);
  // const [hover, setHover] = useState(false);
  return (
    <div className="container pt-10" id="themes">
      <h1
        id="green-yellow"
        className="text-center text-[45px] capitalize cursor-pointer"
        style={{
          fontFamily: "Poppins,sans-serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Theme - Dynamic World
      </h1>

      <section className="pt-4 pb-10">
        <div className="">
          <div className="md:py-6 pb-8 px-2 lg:px-10 flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="lg:w-1/2 xl:w-[50%] p-6 lg:py-12 flex flex-col items-center justify-center md:items-start">
              <h2 className="about-us-h2 mb-4" id="blue-cyan">
                The concept of Dynamic World by HackOverflow 3.0
              </h2>
              <p
                className="about-us-p text-justify mb-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "1rem",
                  margin: "0",
                }}
              >
                  Welcome to the reign of invention, where your code transforms the world! HackOverflow 3.0
                  is proud to present this year’s
                  <span id="blue-cyan">
                  {" "}
                  <a
                    href="https://www.instagram.com/hackoverflow.tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    Theme: Dynamic World.
                  </a>
                </span>{" "}
                  The Dynamic World demands thinkers, problem-solvers,
                  and disruptors who can break boundaries and create real-world impact. If you have the code, we have the platform!
                  Join us and turn your skills into ground breaking solutions that will transform the world.
              </p>
              <p
                className="about-us-p text-justify"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "1rem",
                  margin: "0",
                }}
              >
                For the <span id="orange-pink">HackOverflow 3.0</span>, your mission is to unleash your brilliant ideas to develop projects that revolutionize urban living,
                  transforming how we live, work, and interact with our environments.
                  From transportation and energy systems to healthcare and safety, the possibilities are limitless.
                  Get ready! as the world is on the brink of a new era, and your ideas are the key to shaping tomorrow!
              </p>
            </div>
            <div className="lg:w-1/2">
              <a
                href="https://www.instagram.com/hackoverflow.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="CommunityImage object-cover rounded-md">
                  <FutureCityAsset />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureCityTheme;

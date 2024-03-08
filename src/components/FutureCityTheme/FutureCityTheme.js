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
        Theme - Smart City
      </h1>

      <section className="pt-4 pb-10">
        <div className="">
          <div className="md:py-6 pb-8 px-2 lg:px-10 flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="lg:w-1/2 xl:w-[50%] p-6 lg:py-12 flex flex-col items-center justify-center md:items-start">
              <h2 className="about-us-h2 mb-4" id="blue-cyan">
                The concept of Smart City by HackOverflow 2.0.
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
                Welcome to the realm of innovation!! HackOverflow 2.0 is proud
                to present this year's
                <span id="blue-cyan">
                  {" "}
                  <a
                    href="https://www.instagram.com/hackoverflow.tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    Theme: Smart City.
                  </a>
                </span>{" "}
                A Smart City leverages technology and data-driven solutions to
                enhance the quality of life for its residents, optimize resource
                usage, and improve sustainability. Join us as we explore the
                possibilities of coding the future in urban environments.
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
                For the <span id="orange-pink">HackOverflow 2.0</span>, your
                mission is to create projects that revolutionize urban living.
                From transportation and energy management to healthcare and
                public safety, there are endless opportunities to innovate and
                make cities smarter, more efficient, and more resilient. Get
                ready to unleash your creativity and contribute to building the
                cities of tomorrow!
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

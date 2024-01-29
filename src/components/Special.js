import { Container } from "react-bootstrap";
import { useEffect } from "react";
import devfolioWhite from "../assets/img/devfolioWhite.png";
import polygonWhite from "../assets/img/polygonWhite.png";
import solanaWhite from "../assets/img/solanaWhite.png";
import replitWhite from "../assets/img/replitWhite.png";
import filecoinWhite from "../assets/img/filecoinWhite.png";
import appTech from "../assets/img/apptech.png";
import revaTech from "../assets/img/revatech3.png";
// import pillais from "../assets/img/pillai.png";
import tvsWhite from "../assets/img/tvsWhite.png";
import beeceptorWhite from "../assets/img/beeceptorWhite.png";
import horusonWhite from "../assets/img/horusonWhite.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MediumSponsorsCard from "./MediumSponsorsCard";
import "./Sponsor.css";
import GoldSponsorCard from "./GoldSponsorCard/GoldSponsorCard";
import GeneralSponsorCard from "./GeneralSponsorCard";
import VideoCard from "./VideoCard";
import Video1 from "../assets/img/15.webm";
import Video2 from "../assets/img/16.webm";
import Video3 from "../assets/img/17.webm";

// UNUSED
// import hack2skill from "../assets/img/devfolioWhite.png";
// import TitleSponsorsCard from "./TitleSponsorsCard";
// import GeneralSponsorsCard from "./GeneralSponsorsCard";

export const Special = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="sponsors">
        <Container>
          <div className="relative p-4 lg:py-10 w-full">
            <h1
              className="text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize"
              style={{
                fontFamily: "Poppins,sans-serif",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Dates
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 xl:gap-64">
            <VideoCard video={Video1} weblink={"https://ho2.tech/register"} />
            <VideoCard video={Video2} weblink={"https://ho2.tech/register"} />
            <VideoCard video={Video3} weblink={"https://ho2.tech/register"} />
          </div>
          {/* <TitleSponsorsCard image={hack2skill} dataAos="fade-up" weblink={'#'} /> */}
          <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div>
        </Container>
        <img
          className="background-image-right"
          alt="background"
          src={colorSharp2}
        ></img>
      </section>
    </>
  );
};

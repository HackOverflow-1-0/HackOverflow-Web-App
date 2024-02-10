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

// UNUSED
// import hack2skill from "../assets/img/devfolioWhite.png";
// import TitleSponsorsCard from "./TitleSponsorsCard";
// import GeneralSponsorsCard from "./GeneralSponsorsCard";

export const Sponsors = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="sm:my-5 p-2 px-2" id="sponsors">
        <div className="row pt-5">
          <div className="col-md-10 col-12 spon_us mb-5">
            <div className="row CotentRow">
              <div className="col-7">
                {/* <div className="triangle-left"></div> */}
                <p className="spon_p">
                  Reach hundreds of students and potential customers by
                  sponsoring HackOverFlow 2.0
                </p>
                <h1 className="spon_head my-4">
                  WANT TO <br />
                  SPONSOR US
                </h1>
                <div className="boxx flex flex-col items-start gap-3 sm:flex sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="https://ho2.tech/brochure"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="spon_coll">
                      <span className="text-[9px] md:text-[22px]">
                        Brochure
                      </span>
                    </div>
                  </a>
                  <a
                    href="mailto:hackoverflow@mes.ac.in?subject=Sponsor%20request%20for%20HACKOVERFLOW%202.0%20-%20HACKATHON%202024"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="spon_coll">
                      <nowrap>
                        <span className="text-[9px] md:text-[22px]">
                          E-mail us
                        </span>
                      </nowrap>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              Our Sponsors
            </h1>
          </div>
          {/* <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
            <h1 className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal">
              Principle Sponsor
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-2 ">
            <MediumSponsorsCard
              image={pillais}
              dataAos="fade-right"
              weblink={"https://phcet.ac.in/"}
            />
          </div>
          <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div> */}

          <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
            <h1
              className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
              style={{ fontFamily: "Poppins,sans-serif", fontWeight: 400 }}
            >
              Platinum Sponsor
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-4 xl:gap-64">
            <MediumSponsorsCard
              weblink={"https://devfolio.co/home/"}
              image={devfolioWhite}
              dataAos="fade-right"
            />
            <MediumSponsorsCard
              weblink={"https://aptechpanvel.in/"}
              image={appTech}
              dataAos="fade-up"
            />
            <MediumSponsorsCard
              weblink={"https://polygon.technology/"}
              image={polygonWhite}
              dataAos="fade-left"
            />
            <MediumSponsorsCard
              weblink={"https://beeceptor.com/"}
              image={beeceptorWhite}
              dataAos="fade-down"
            />
          </div>
          {/* <TitleSponsorsCard image={hack2skill} dataAos="fade-up" weblink={'#'} /> */}
          <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div>

          <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
            <h1
              className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
              style={{ fontFamily: "Poppins,sans-serif", fontWeight: 400 }}
            >
              Gold Sponsor
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-4 xl:gap-2">
            <GoldSponsorCard
              weblink={"https://www.tvsmotor.com/"}
              image={tvsWhite}
              dataAos="fade-left"
            />
            <GoldSponsorCard
              weblink={"https://replit.com/"}
              image={replitWhite}
              dataAos="fade-right"
            />
            <GoldSponsorCard
              weblink={"https://solana.com/"}
              image={solanaWhite}
              dataAos="fade-up"
            />
            <GoldSponsorCard
              weblink={"https://filecoin.io/"}
              image={filecoinWhite}
              dataAos="fade-down"
            />
          </div>

          <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div>

          <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
            <h1
              className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
              style={{ fontFamily: "Poppins,sans-serif", fontWeight: 400 }}
            >
              General Sponsor
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-2 xl:grid xl:grid-cols-2 xl:gap-2">
            <GeneralSponsorCard
              weblink={"https://revatech-ai.com/"}
              image={revaTech}
              dataAos="fade-left"
            />
            <GeneralSponsorCard
              weblink={"https://www.horuson.com/"}
              image={horusonWhite}
              dataAos="fade-right"
            />
          </div>

          <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid xl:grid-cols-4 xl:gap-5 md:grid md:grid-cols-2 md:gap-3">
            {/* <GeneralSponsorsCard image={revatech} dataAos="fade-up" /> */}
            {/* <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" /> */}
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

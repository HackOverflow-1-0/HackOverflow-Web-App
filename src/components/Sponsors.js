import { Container } from "react-bootstrap";
import { useEffect } from "react";
import hack2skill from "../assets/img/comingsoon.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TitleSponsorsCard from "./TitleSponsorsCard";
import MediumSponsorsCard from "./MediumSponsorsCard";
import GeneralSponsorsCard from "./GeneralSponsorsCard";

export const Sponsors = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="sponsors" id="sponsors">
      <Container>
        <div className="relative p-4 lg:py-10 w-full">
          <h1
            className="text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize"
            style={{ fontFamily: "Helvetica Bold" }}
          >
            Our Sponsors
          </h1>
          <div class="absolute h-[2px] bg-[#7b1072] w-56" />
        </div>
        <div className="p-6 lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
          <h1 className="capitalize text-[2rem] lg:text-[2.5rem] font-normal">
            Title Sponsor
          </h1>
        </div>
        <TitleSponsorsCard image={hack2skill} dataAos="fade-up" weblink={'#'} />
        <div className="p-4 fonts-space-grotesk">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-3">
          <MediumSponsorsCard
            weblink={'#'}
            title="Event Sponsors"
            image={hack2skill}
            dataAos="fade-right"
          />
          <MediumSponsorsCard
            weblink={'#'}
            title="Associate Sponsors"
            image={hack2skill}
            dataAos="fade-left"
          />
          <MediumSponsorsCard
            weblink={'#'}
            title="Upskilling Sponsors"
            image={hack2skill}
            dataAos="fade-right"
          />
          <MediumSponsorsCard
            weblink={'#'}
            title="Silver Sponsors"
            image={hack2skill}
            dataAos="fade-left"
          />
        </div>
        <div className="pt-10">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>
        <div className="p-6 lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
          <h1 className="capitalize text-[1.4rem] lg:text-[1.6rem] font-normal">
            General Sponsors
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 xl:grid xl:grid-cols-4 xl:gap-5 md:grid md:grid-cols-2 md:gap-3">
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

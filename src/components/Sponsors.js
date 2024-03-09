import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
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
import quillbotWhite from "../assets/img/quillbotWhite.png";
// import imfsWhite from "../assets/img/imfsWhite.webp";
// import jamboreeWhite from "../assets/img/jamboreeWhiteNew.png";
import bobbleWhite from "../assets/img/bobbleWhite.png";
import languifyWhite from "../assets/img/languifyWhite.png";
// import interViewBuddyWhite from "../assets/img/interViewBuddyWhite.png";
// import philipsWhite from "../assets/img/philipsWhite.png";
import noticebardWhite from "../assets/img/noticebardWhite.png";
import goldenorioleWhite from "../assets/img/goldenorioleWhite.png";

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

const Sponsors = () => {
  // Define sponsors data
  const [sponsors, setSponsors] = useState([
    {
      category: "Our",
      categoryStyle: "orange-pink",
      open: true, // Set default to open
      items: [
        {
          id: 1,
          name: "Bobble AI",
          image: bobbleWhite,
          link: "https://bobble.ai/en/home",
          SubSponsorcategory: "Silver",
          effect: "fade-right",
        },
        {
          id: 2,
          name: "Aptech Panvel",
          image: appTech,
          link: "https://aptechpanvel.in/",
          effect: "fade-up",
          SubSponsorcategory: "Silver",
        },
        {
          id: 3,
          name: "TVS Motor",
          image: tvsWhite,
          link: "https://www.tvsmotor.com/",
          effect: "fade-down",
          SubSponsorcategory: "Gold",
        },
        // {
        //   id: 4,
        //   name: "IMFS Mumbai",
        //   image: imfsWhite,
        //   link: "https://www.imfs.co.in/",
        //   effect: "fade-left",
        //   SubSponsorcategory: "Silver",
        // },
        // {
        //   id: 5,
        //   name: "Jamboree",
        //   image: jamboreeWhite,
        //   link: "https://www.jamboreeindia.com/",
        //   effect: "fade-left",
        // },
        {
          id: 5,
          name: "NoticeBard",
          image: noticebardWhite,
          link: "https://noticebard.com/",
          effect: "fade-left",
          SubSponsorcategory: "General",
        },
        {
          id: 6,
          name: "Languify",
          image: languifyWhite,
          link: "https://www.languify.in/",
          effect: "fade-up",
          SubSponsorcategory: "General",
        },
        {
          id: 7,
          name: "Quillbot",
          image: quillbotWhite,
          link: "https://quillbot.com/",
          effect: "fade-right",
          SubSponsorcategory: "General",
        },
        // {
        //   id: 8,
        //   name: "InterView Buddy",
        //   image: interViewBuddyWhite,
        //   link: "https://interviewbuddy.net/",
        //   effect: "fade-right",
        //   SubSponsorcategory: "General",
        // },
        {
          id: 9,
          name: "Golden Oriole",
          image: goldenorioleWhite,
          link: "https://www.goldenorioleedu.com/",
          effect: "fade-right",
          SubSponsorcategory: "Silver",
        },
      ],
    },
    {
      category: "Past",
      categoryStyle: "green-yellow",
      open: false,
      items: [
        {
          id: 1,
          name: "Devfolio",
          image: devfolioWhite,
          link: "https://devfolio.co/home/",
          effect: "fade-right",
          SubSponsorcategory: "Gold",
        },
        {
          id: 2,
          name: "Polygon",
          image: polygonWhite,
          link: "https://polygon.technology/",
          effect: "fade-up",
          SubSponsorcategory: "Gold",
        },
        {
          id: 3,
          name: "Aptech Panvel",
          image: appTech,
          link: "https://aptechpanvel.in/",
          effect: "fade-down",
          SubSponsorcategory: "Gold",
        },
        {
          id: 4,
          name: "Beeceptor",
          image: beeceptorWhite,
          link: "https://beeceptor.com/",
          effect: "fade-left",
          SubSponsorcategory: "Gold",
        },
        {
          id: 5,
          name: "Replit",
          image: replitWhite,
          link: "https://replit.com/",
          effect: "fade-left",
          SubSponsorcategory: "Silver",
        },
        {
          id: 6,
          name: "Solana",
          image: solanaWhite,
          link: "https://solana.com/",
          effect: "fade-down",
          SubSponsorcategory: "Silver",
        },
        {
          id: 7,
          name: "FileCoin",
          image: filecoinWhite,
          link: "https://filecoin.io/",
          effect: "fade-up",
          SubSponsorcategory: "Silver",
        },
        {
          id: 8,
          name: "TVS Motor",
          image: tvsWhite,
          link: "https://www.tvsmotor.com/",
          effect: "fade-right",
          SubSponsorcategory: "Silver",
        },
        {
          id: 9,
          name: "Horuson",
          image: horusonWhite,
          link: "https://www.horuson.com/",
          effect: "fade-left",
          SubSponsorcategory: "General",
        },
        {
          id: 10,
          name: "Reva Tech",
          image: revaTech,
          link: "https://revatech-ai.com/",
          effect: "fade-right",
          SubSponsorcategory: "General",
        },
        // Add more gold sponsors here
      ],
    },
  ]);

  const hasMediaPartner = sponsors.find(
    (sponsor) =>
      sponsor.category === "Past" &&
      sponsor.items.some((item) => item.SubSponsorcategory === "Media")
  );

  // Function to toggle accordion item open/close state
  const toggleAccordion = (index) => {
    const updatedSponsors = sponsors.map((sponsor, i) => {
      if (i === index) {
        sponsor.open = !sponsor.open;
      } else {
        sponsor.open = false;
      }
      return sponsor;
    });
    setSponsors(updatedSponsors);
  };

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
                    href="https://ho2.tech/sponsor"
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
          {sponsors.map((sponsor, index) => (
            <div key={index} className="mb-12">
              <div
                className="SponsorText relative p-4 lg:py-10 w-full gap-3"
                onClick={() => toggleAccordion(index)}
              >
                <h1
                  id={sponsor.categoryStyle}
                  className="text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {sponsor.category} Sponsors
                </h1>
              </div>
              {sponsor.open && (
                <>
                  {/* Display Gold sponsors */}
                  <div className="lg:px-56 lg:pt-1 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
                    <h1
                      className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Gold Sponsor
                    </h1>
                  </div>
                  {sponsor.items
                    .filter(
                      (item) =>
                        sponsor.category === "Our" &&
                        item.SubSponsorcategory === "Gold"
                    )
                    .map((item, index) => (
                      <div key={index}>
                        <MediumSponsorsCard
                          weblink={item.link}
                          image={item.image}
                          dataAos={item.effect}
                          SubSponsorcategory={item.SubSponsorcategory}
                        />
                      </div>
                    ))}
                  <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-4 xl:gap-64">
                    {sponsor.items
                      .filter(
                        (item) =>
                          sponsor.category === "Past" &&
                          item.SubSponsorcategory === "Gold"
                      )
                      .map((item, index) => (
                        <div key={index}>
                          <MediumSponsorsCard
                            weblink={item.link}
                            image={item.image}
                            dataAos={item.effect}
                            SubSponsorcategory={item.SubSponsorcategory}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="pt-10">
                    <hr className="text-[#767676] dark:text-[#767676]" />
                  </div>

                  {/* Display Silver sponsors */}
                  <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
                    <h1
                      className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Silver Sponsor
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-3 xl:gap-64">
                    {sponsor.items
                      .filter(
                        (item) =>
                          sponsor.category === "Our" &&
                          item.SubSponsorcategory === "Silver"
                      )
                      .map((item, index) => (
                        <div key={index}>
                          <MediumSponsorsCard
                            weblink={item.link}
                            image={item.image}
                            dataAos={item.effect}
                            SubSponsorcategory={item.SubSponsorcategory}
                          />
                        </div>
                      ))}
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-4 xl:gap-64">
                    {sponsor.items
                      .filter(
                        (item) =>
                          sponsor.category === "Past" &&
                          item.SubSponsorcategory === "Silver"
                      )
                      .map((item, index) => (
                        <div key={index}>
                          <MediumSponsorsCard
                            weblink={item.link}
                            image={item.image}
                            dataAos={item.effect}
                            SubSponsorcategory={item.SubSponsorcategory}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="pt-10">
                    <hr className="text-[#767676] dark:text-[#767676]" />
                  </div>

                  {/* Display General sponsors */}
                  <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
                    <h1
                      className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      General Sponsor
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 gap-2 xl:grid xl:grid-cols-2 xl:gap-2">
                    {sponsor.items
                      .filter(
                        (item) =>
                          sponsor.category === "Past" &&
                          item.SubSponsorcategory === "General"
                      )
                      .map((item, index) => (
                        <div key={index}>
                          <GeneralSponsorCard
                            weblink={item.link}
                            image={item.image}
                            dataAos={item.effect}
                            SubSponsorcategory={item.SubSponsorcategory}
                          />
                        </div>
                      ))}
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-3 xl:gap-64">
                    {sponsor.items
                      .filter(
                        (item) =>
                          sponsor.category === "Our" &&
                          item.SubSponsorcategory === "General"
                      )
                      .map((item, index) => (
                        <div key={index}>
                          <MediumSponsorsCard
                            weblink={item.link}
                            image={item.image}
                            dataAos={item.effect}
                            SubSponsorcategory={item.SubSponsorcategory}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="pt-10">
                    <hr className="text-[#767676] dark:text-[#767676]" />
                  </div>

                  {/* Display Media Partner
                  {!hasMediaPartner && (
                    <div className="lg:px-56 lg:pt-1 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
                      <h1
                        className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
                        style={{
                          fontFamily: "Poppins,sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        Media Partner
                      </h1>
                    </div>
                  )}
                  {sponsor.items
                    .filter(
                      (item) =>
                        sponsor.category === "Our" &&
                        item.SubSponsorcategory === "Media"
                    )
                    .map((item, index) => (
                      <div key={index}>
                        <MediumSponsorsCard
                          weblink={item.link}
                          image={item.image}
                          dataAos={item.effect}
                          SubSponsorcategory={item.SubSponsorcategory}
                        />
                      </div>
                    ))}
                  {!hasMediaPartner && (
                    <div className="pt-10">
                      <hr className="text-[#767676] dark:text-[#767676]" />
                    </div>
                  )} */}
                </>
              )}
              {/* {sponsor.open && (
                <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-4 xl:gap-64">
                  {sponsor.items.map((item) => (
                    <div key={item.id}>
                      {sponsor.category === "Our" && (
                        <MediumSponsorsCard
                          weblink={item.link}
                          image={item.image}
                          dataAos={item.effect}
                        />
                      )}
                      {sponsor.category === "Past" && (
                        <GoldSponsorCard
                          weblink={item.link}
                          image={item.image}
                          dataAos={item.effect}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Sponsors;

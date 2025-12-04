import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

// Current Sponsors Assets
import blueStar from "../assets/img/Blue Star tab.png";
import appTech from "../assets/img/apptech.png";
import quillbotWhite from "../assets/img/quillbotWhite.png";
import pranika from "../assets/img/pranika.png";
import imfsWhite from "../assets/img/imfsWhite.webp";
import amStudy from "../assets/img/AMstudy.png";
import bsides from "../assets/img/BSides Mumbai White.png";
import unloxBlack from "../assets/img/unlox black.png"; 

// Past Sponsors Assets
import noticebardWhite from "../assets/img/noticebardWhite.png";
import devfolioWhite from "../assets/img/devfolioWhite.png";
import polygonWhite from "../assets/img/polygonWhite.png";
import solanaWhite from "../assets/img/solanaWhite.png";
import replitWhite from "../assets/img/replitWhite.png";
import filecoinWhite from "../assets/img/filecoinWhite.png";
import revaTech from "../assets/img/revatech3.png";
import tvsWhite from "../assets/img/tvsWhite.png";
import beeceptorWhite from "../assets/img/beeceptorWhite.png";
import horusonWhite from "../assets/img/horusonWhite.png";
import bobbleWhite from "../assets/img/bobbleWhite.png";
import languifyWhite from "../assets/img/languifyWhite.png";
import goldenorioleWhite from "../assets/img/goldenoriolenew.png";
import aeccDark from "../assets/img/aeccWhite.png";
import scribbrDark from "../assets/img/scribbrDark.png";

// Other Assets & Components
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MediumSponsorsCard from "./MediumSponsorsCard";
import "./Sponsor.css";
import GoldSponsorCard from "./GoldSponsorCard/GoldSponsorCard";
import GeneralSponsorCard from "./GeneralSponsorCard";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "./SponsorReset.css";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([
    {
      category: "Our",
      categoryStyle: "green-teal",
      open: true,
      items: [
        // CoPowered
        {
          id: 1,
          name: "Blue Star",
          image: blueStar,
          link: "https://www.bluestarindia.com/",
          effect: "fade-down",
          SubSponsorcategory: "CoPowered",
        },
        // Gold
        {
          id: 2,
          name: "AppTech Panvel",
          image: appTech,
          link: "https://aptechpanvel.co.in/",
          SubSponsorcategory: "Gold",
          effect: "fade-up",
        },
        {
          id: 3,
          name: "IMFS",
          image: imfsWhite,
          link: "https://www.imfs.co.in/",
          SubSponsorcategory: "Gold",
          effect: "fade-up",
        },
        {
          id: 4,
          name: "AM Study",
          image: amStudy,
          link: "https://amstudyabroad.com/",
          SubSponsorcategory: "Gold",
          effect: "fade-up",
        },
        // Bronze
        {
          id: 5,
          name: "Quillbot",
          image: quillbotWhite,
          link: "https://quillbot.com/",
          effect: "fade-down",
          SubSponsorcategory: "Bronze",
        },
        // Environment Partner
        {
          id: 6,
          name: "Pranika",
          image: pranika,
          link: "https://theparnika.com/",
          effect: "fade-right",
          SubSponsorcategory: "Environment",
        },
        // Community Partner
        {
          id: 7,
          name: "BSides Mumbai",
          image: bsides,
          link: "https://www.bsidesmumbai.in/",
          effect: "fade-down",
          SubSponsorcategory: "Community",
        },
        // Education Partner 
        {
          id: 8, 
          name: "Unlox",
          image: unloxBlack,
          link: "https://unlox.com/",
          effect: "fade-up",
          SubSponsorcategory: "Education",
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
          name: "Bluestar",
          image: tvsWhite,
          link: "https://www.tvsmotor.com/",
          effect: "fade-right",
          SubSponsorcategory: "Gold",
        },
        {
          id: 9,
          name: "Horuson",
          image: horusonWhite,
          link: "https://www.horuson.com/",
          effect: "fade-left",
          SubSponsorcategory: "Bronze",
        },
        {
          id: 10,
          name: "Reva Tech",
          image: revaTech,
          link: "https://revatech-ai.com/",
          effect: "fade-right",
          SubSponsorcategory: "Bronze",
        },
        {
          id: 11,
          name: "Aptech Panvel",
          image: appTech,
          link: "https://aptechpanvel.in/",
          effect: "fade-left",
          SubSponsorcategory: "Silver",
        },
        {
          id: 12,
          name: "Bobble AI",
          image: bobbleWhite,
          link: "https://bobble.ai/en/home",
          SubSponsorcategory: "Gold",
          effect: "fade-up",
        },
        {
          id: 13,
          name: "Languify",
          image: languifyWhite,
          link: "https://www.languify.in/",
          effect: "fade-right",
          SubSponsorcategory: "Bronze",
        },
        {
          id: 14,
          name: "Quillbot",
          image: quillbotWhite,
          link: "https://quillbot.com/",
          effect: "fade-down",
          SubSponsorcategory: "Bronze",
        },
        {
          id: 15,
          name: "Golden Oriole",
          image: goldenorioleWhite,
          link: "https://www.goldenorioleedu.com/",
          effect: "fade-down",
          SubSponsorcategory: "Silver",
        },
        {
          id: 16,
          name: "AECC Global",
          image: aeccDark,
          link: "https://www.aeccglobal.in/",
          effect: "fade-right",
          SubSponsorcategory: "Silver",
        },
        {
          id: 17,
          name: "Scribbr",
          image: scribbrDark,
          link: "https://www.scribbr.com/",
          effect: "fade-left",
          SubSponsorcategory: "Bronze",
        },
        {
          id: 5,
          name: "NoticeBard",
          image: noticebardWhite,
          link: "https://noticebard.com/",
          effect: "fade-down",
          SubSponsorcategory: "Silver",
        },
      ],
    },
  ]);

  const hasMediaPartner = sponsors.find(
    (sponsor) =>
      sponsor.category === "Past" &&
      sponsor.items.some((item) => item.SubSponsorcategory === "Media")
  );

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
                <p className="spon_p">
                  Reach hundreds of students and potential customers by
                  sponsoring HackOverFlow 4.0
                </p>
                <h1 className="spon_head my-4">
                  WANT TO <br />
                  SPONSOR US
                </h1>
                <div className="boxx flex flex-col items-start gap-3 sm:flex sm:flex-row sm:items-center sm:gap-4">
                  <a
                  // href="https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/Brochure/sponsorBrochure.pdf"
                    href="/docs/SponsorBrochure.pdf"
                    download="HackOverflow_4.0_Sponsorship_Brochure.pdf"
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
                    href="mailto:admin@hackoverflow3.tech"
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
                  {sponsor.category === "Our" ? (
                    <>
                      {/* Co-Powered By Section */}
                      {renderSponsorSection("Co-Powered By", "CoPowered", sponsor)}
                      
                      {/* Gold Sponsor Section */}
                      {renderSponsorSection("Gold Sponsor", "Gold", sponsor)}
                      
                      {/* Bronze Sponsor Section */}
                      {renderSponsorSection("Bronze Sponsor", "Bronze", sponsor)}
                      
                      {/* Education Partner Section */}
                      {renderSponsorSection("Education Partner", "Education", sponsor)}
                      
                      {/* Environment Partner Section */}
                      {renderSponsorSection("Environment Partner", "Environment", sponsor)}
                      
                      {/* Community Partner Section */}
                      {renderSponsorSection("Community Partner", "Community", sponsor)}
                    </>
                  ) : (
                    <>
                      <div className="pt-10">
                        <hr className="text-[#767676] dark:text-[#767676]" />
                      </div>
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
                      <div className="sponsor-grid-container">
                        {sponsor.items
                          .filter(
                            (item) =>
                              sponsor.category === "Past" &&
                              item.SubSponsorcategory === "Gold"
                          )
                          .map((item, index) => (
                            <div key={index} className="sponsor-grid-item">
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
                      <div className="sponsor-grid-container">
                        {sponsor.items
                          .filter(
                            (item) =>
                              sponsor.category === "Past" &&
                              item.SubSponsorcategory === "Silver"
                          )
                          .map((item, index) => (
                            <div key={index} className="sponsor-grid-item">
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
                      <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
                        <h1
                          className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Bronze Sponsor
                        </h1>
                      </div>
                      <div className="sponsor-grid-container">
                        {sponsor.items
                          .filter(
                            (item) =>
                              sponsor.category === "Past" &&
                              item.SubSponsorcategory === "Bronze"
                          )
                          .map((item, index) => (
                            <div key={index} className="sponsor-grid-item">
                              <MediumSponsorsCard
                                weblink={item.link}
                                image={item.image}
                                dataAos={item.effect}
                                SubSponsorcategory={item.SubSponsorcategory}
                              />
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

// Helper function to render sponsor sections with unified styling
const renderSponsorSection = (title, category, sponsor) => {
  const filteredItems = sponsor.items.filter(item => item.SubSponsorcategory === category);
  if (filteredItems.length === 0) return null;
  
  return (
    <>
      <div className="lg:px-56 lg:pt-1 space-y-8 fonts-space-grotesk text-[#fafafa] flex flex-col items-center justify-center">
        <h1 className="py-6 capitalize text-[2rem] lg:text-[2.5rem] font-normal"
          style={{ fontFamily: "Poppins,sans-serif", fontWeight: 400 }}>
          {title}
        </h1>
      </div>
      <motion.div
        className="sponsor-grid-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            className="sponsor-grid-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MediumSponsorsCard
              weblink={item.link}
              image={item.image}
              dataAos={item.effect}
              SubSponsorcategory={item.SubSponsorcategory}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="pt-10">
        <hr className="text-[#767676] dark:text-[#767676]" />
      </div>
    </>
  );
};

const SponsorCard = ({ weblink, image, dataAos, category }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sponsor-card-wrapper"
    >
      <MediumSponsorsCard 
        weblink={weblink} 
        image={image} 
        dataAos={dataAos}
        SubSponsorcategory={category}
      />
    </motion.div>
  );
};

const SponsorSection = ({ title, sponsors, category }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="sponsor-section"
    >
      <h2 className="sponsor-section-title">{title}</h2>
      <div className="sponsor-grid">
        <AnimatePresence>
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={sponsor.id} {...sponsor} />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Sponsors;

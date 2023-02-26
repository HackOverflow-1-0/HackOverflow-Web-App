import React from "react";
// import logo from "../../assets/img/hack-overflow-logo.png";
// import fir from "../../assets/img/first.png"
// import banneriamge from "../../assets/img/hackathon.jpg";
import image1 from "../../assets/img/college-club-events/image1.jpeg";
import image2 from "../../assets/img/college-club-events/image2.jpeg";
import image3 from "../../assets/img/college-club-events/image3.jpg";
import image4 from "../../assets/img/college-club-events/image4.jpg";
import image5 from "../../assets/img/college-club-events/image5.jpg";
import image6 from "../../assets/img/college-club-events/image6.jpg";
import image7 from "../../assets/img/college-club-events/image7.jpg";
// import image8 from "../../assets/img/college-club-events/image8.jpg";
import image9 from "../../assets/img/college-club-events/image9.jpg";
import image10 from "../../assets/img/college-club-events/image10.jpg";
import image11 from "../../assets/img/college-club-events/image11.jpg";
import image12 from "../../assets/img/college-club-events/image12.jpg";
// import image13 from "../../assets/img/college-club-events/image13.jpg";
import image14 from "../../assets/img/college-club-events/image14.png";
import image15 from "../../assets/img/college-club-events/image15.png";
import image16 from "../../assets/img/college-club-events/image16.png";

import "./CollegeClub.css";
import Carousel from "react-bootstrap/Carousel";

const CollegeClub = () => {
  return (
    <>
      <section className="top">
        <div className="relative topContainer">
          {/* <div class="absolute h-[4px] bg-[#7b1072] w-24" /> */}
          <h1
            className="pt-2 text-[30px] sm:text-[36px] md:text-[35px] lg:text-[45px]"
            style={{ fontFamily: "Helvetica Bold" }}
          >
            Glimpses of PHCET <br />
            Club Events
          </h1>
          <div className="Description mt-4 md:mt-2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Carousel interval={2000} className="border-white">
                <Carousel.Item>
                  <img className="Image9" src={image16} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image4}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image5}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image6}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image7}
                    alt="Second slide"
                  />
                </Carousel.Item>
                {/* <Carousel.Item>
                  <img
                    className="Image9"
                    src={image8}
                    alt="Second slide"
                  />
                </Carousel.Item> */}
                <Carousel.Item>
                  <img className="Image9" src={image9} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="Image9" src={image10} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="Image9" src={image11} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="Image9" src={image12} alt="Second slide" />
                </Carousel.Item>
                {/* <Carousel.Item>
                  <img
                    className="Image9"
                    src={image13}
                    alt="Second slide"
                  />
                </Carousel.Item> */}
                <Carousel.Item>
                  <img className="Image9" src={image14} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="Image9" src={image15} alt="Second slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="bg-cover bg-center h-screen w-full md:h-64 md:w-auto" style={{ backgroundImage: `url(${banneriamge})` }}>
                <div class="container mx-auto h-full md:h-64">
                    <ImageSlider effectDelay={500} autoPlayDelay={1000}>
                        <Slide>
                            <img alt="img1" class="w-full h-64 object-cover" src={logo} />
                        </Slide>
                        <Slide>
                            <img alt="img2" class="w-full h-64 object-cover" src={fir} />
                        </Slide>
                        <Slide>
                            <img alt="img3" class="w-full h-64 object-cover" src={logo} />
                        </Slide>
                    </ImageSlider>
                </div>
            </div> */}
    </>
  );
};

export default CollegeClub;

// import meter1 from "../../assets/img/meter1.svg";
// import meter2 from "../../assets/img/meter2.svg";
// import meter3 from "../../assets/img/meter3.svg";
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../../assets/img/arrow1.svg";
// import arrow2 from "../../assets/img/arrow2.svg";
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import colorSharp from "../../assets/img/color-sharp.png"
import projImg1 from "../../assets/img/project-img1.png"
// import projImg1 from "../../assets/img/first.png"
import banner from "../../assets/img/banner-bg.png";
import one from "../../assets/img/1st.jpg";
import podiumData from './data'
import Podium from './Podium'
// import PriceCard from '../PriceCard';
// import TrophyCard from '../TrophyCard';/
import { ProjectCard } from '../ProjectCard';



export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Prize Money</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
              <div className="pt-56">
                <Podium winners={podiumData} />
                <div>
                  <div className="py-8 flex flex-col items-center sm:flex sm:flex-row sm:items-start justify-around md:space-x-6">
                    {/* <PriceCard image={projImg1} /> */}
                    <ProjectCard title="Third Prize" desc1="Total Prize of Worth $10,000" desc2="Cash Prize of INR 15,000" imgUrl={projImg1} dataAos="fade-right" />
                    <ProjectCard title="First Prize" desc1="Total Prize of Worth $15,000" desc2="Cash Prize of INR 35,000" imgUrl={projImg1} dataAos="fade-up" />
                    <ProjectCard title="Second Prize" desc1="Total Prize of Worth $12,500" desc2="Cash Prize of INR 25,000" imgUrl={projImg1} dataAos="fade-left" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
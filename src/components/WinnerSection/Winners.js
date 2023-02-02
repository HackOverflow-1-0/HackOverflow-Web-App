import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import colorSharp from "../../assets/img/color-sharp.png";
import projImg1 from "../../assets/img/project-img1.png";
// import projImg1 from "../../assets/img/first.png"
// import banner from "../../assets/img/banner-bg.png";
// import one from "../../assets/img/1st.jpg";
// import podiumData from "./data";
// import Podium from "./Podium";
import { ProjectCard } from "../ProjectCard";

export const Winners = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Prize Money</h2>
              <div>
                {/* <Podium winners={podiumData} /> */}
                <div>
                  <div className="py-8 flex flex-col items-center sm:flex sm:flex-row sm:items-start justify-around md:space-x-6">
                    <ProjectCard
                      title="Third Prize"
                      desc1="Total Prize of Worth $10,000"
                      desc2="Cash Prize of INR 15,000"
                      imgUrl={projImg1}
                      dataAos="fade-right"
                    />
                    <ProjectCard
                      title="First Prize"
                      desc1="Total Prize of Worth $15,000"
                      desc2="Cash Prize of INR 35,000"
                      imgUrl={projImg1}
                      dataAos="fade-up"
                    />
                    <ProjectCard
                      title="Second Prize"
                      desc1="Total Prize of Worth $12,500"
                      desc2="Cash Prize of INR 25,000"
                      imgUrl={projImg1}
                      dataAos="fade-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

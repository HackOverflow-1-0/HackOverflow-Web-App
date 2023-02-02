import React from "react";
import "./Prizes.css";
import Lottie from "lottie-react";
import { Container, Row, Col } from "react-bootstrap";
import firstPosition from "../../assets/Lotties/104002-gold-badge.json";
import secondPosition from "../../assets/Lotties/104344-2nd-position.json";
import thirdPosition from "../../assets/Lotties/104345-badge-3rd.json";
import trophyData from "../../assets/Lotties/677-trophy.json";
function Prizes() {
  const defaultOptions = {
    loop: true,
    // autoplay: true,
    // animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    // <Container>
    <div id="cards_landscape_wrap-2">
      <div className="container">
        <div className="row toRelative">
          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2 blockContainer1">
            <a href="">
              <div className="card-flyer secondPrize">
                <Lottie className="lottie" animationData={trophyData} />

                <div className="text-box">
                  <div className="image-box">
                    <Lottie animationData={secondPosition} />
                    {/* <img src={Trophy} alt="" /> */}
                    {/* <img src="" alt="">
                      <i className="bi bi-trophy"></i>
                    </img> */}
                  </div>
                  <div className="text-container">
                    <h6>Second Prize</h6>
                    <p>Total Prize of Worth $15,000 Cash Prize of INR 35,000</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2 blockContainer2">
            <a href="">
              <div className="card-flyer thirdPrize">
                <Lottie className="lottie" animationData={trophyData} />
                <div className="text-box">
                  <div className="image-box">
                    {/* <img src={Trophy} alt="" /> */}
                    <Lottie animationData={firstPosition} />
                  </div>
                  <div className="text-container">
                    <h6>First Prize</h6>
                    <p>
                      Total Prize of Worth $12,500 Cash Prize of INR 25,000{" "}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2 blockContainer3">
            <a href="">
              <div className="card-flyer firstPrize">
                <Lottie className="lottie" animationData={trophyData} />
                <div className="text-box">
                  <div className="image-box">
                    <Lottie animationData={thirdPosition} />
                  </div>
                  {/* <iframe src="https://embed.lottiefiles.com/animation/104345"></iframe> */}

                  <div className="text-container">
                    <h6>Third Prize</h6>
                    <p>
                      Total Prize of Worth $10,000 Cash Prize of INR 15,000{" "}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <a href="">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-container">
                    <h6>Title 04</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
    // {/* </Container> */}
  );
}

export default Prizes;

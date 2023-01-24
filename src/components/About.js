import "./About.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import { useEffect, useRef } from "react";
import { env } from "process";
import TrackVisibility from "react-on-screen";
const About = () => {
  const mapElement = useRef();

  const key = env.TOM_TOM_MAPS_API;

  useEffect(() => {
    let maps = tt.map({
      key: "66AS5Y04A9wZlAR4jt93xH6dCVAwLzUr",
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      container: mapElement.current,
      center: [73.1741628, 18.8932469],
      zoom: 16,
    });
    var marker = new tt.Marker()
      .setLngLat([73.1741628, 18.8932469])
      .addTo(maps);
    // setMap(maps);
    return () => maps.remove();
  }, []);
  return (
    <div id="aboutSection">
      <h1 id="about-us-text">About Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <h2>Who we are?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2>How to reach..</h2>
            <p>
              <div className="maps-card" id="map" ref={mapElement} />
              <div className="maps-button">
                <a
                  href="https://www.google.com/maps/place/Pillai+HOC+College+Of+Engineering+%26+Technology/@18.8932468,73.1718668,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7e6af4a9b7a47:0x30dbd3b0d3c14416!8m2!3d18.8932418!4d73.1763515"
                  target="_blank"
                >
                  <button className="open-maps">Open Maps</button>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

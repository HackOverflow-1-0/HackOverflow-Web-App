import "./About.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// import TrackVisibility from "react-on-screen";

const About = () => {
  const mapElement = useRef();
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    // Create and initialize map immediately
    let maps = tt.map({
      key: "66AS5Y04A9wZlAR4jt93xH6dCVAwLzUr",
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      container: mapElement.current,
      center: [73.1762426, 18.8934723],
      zoom: 16,
    });

    // Add marker
    const marker = new tt.Marker()
      .setLngLat([73.1762426, 18.8934723])
      .addTo(maps);

    // Add hover effect to marker
    marker.getElement().addEventListener('mouseenter', () => {
      marker.getElement().style.transform = 'scale(1.2)';
    });
    
    marker.getElement().addEventListener('mouseleave', () => {
      marker.getElement().style.transform = 'scale(1)';
    });

    // Setup intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          maps.resize(); // Resize map when visible
        }
      },
      { threshold: 0.2 }
    );

    if (mapElement.current) {
      observer.observe(mapElement.current);
    }

    return () => {
      maps.remove();
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container py-6">
        <div className="row">
          <motion.div 
            className="col-lg-6 col-sm-12 clg-desc"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="about-us-h2" id="green-yellow">
              About PHCET
            </h1>
            <p className="about-us-p text-justify">
              Pillai HOC College of Engineering and Technology is proud to
              offer a state-of-the-art learning environment for students with
              a passion for technology and innovation. Our 14-acre campus
              boasts top-of-the-line amenities, including a 3,000 square-foot
              facility with spacious classrooms, well-equipped laboratories
              and workshops, modern computer facilities, and an extensive
              library. Additionally, our distinguished faculty includes
              seasoned professors who are dedicated to fostering a stimulating
              and nurturing environment for students.
            </p>
          </motion.div>

          <motion.div 
            className="col-lg-6 col-sm-12 clg-map"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 id="green-yellow">How to reach..</h1>
            <div className="map-wrapper">
              <div className="map-container">
                <div 
                  className={`maps-card ${isMapVisible ? 'visible' : ''}`} 
                  id="map" 
                  ref={mapElement} 
                />
              </div>
              <motion.div 
                className="maps-button-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://www.google.com/maps/place/Pillai+HOC+College+Of+Engineering+%26+Technology/@18.8932468,73.1718668,17z/"
                  target="_blank"
                  rel="noreferrer"
                  className="map-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="open-maps">
                    <span>Open Maps</span>
                  </button>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState, useCallback } from "react";
import "./InstagramReelsCards.css";

const InstagramReelsCards = () => {
  const [cardLinks] = useState([
    "https://www.instagram.com/reel/C4aLJaltDFk/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/C4Z4F1RtoIk/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/C4Zq4J_NREH/?utm_source=ig_embed&amp;utm_campaign=loading",
  ]);

  const [isVisible, setIsVisible] = useState(false);

  const loadInstagramScript = useCallback(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.head.appendChild(script);
    return script;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          const script = loadInstagramScript();
          return () => {
            document.head.removeChild(script);
          };
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.instagram-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [loadInstagramScript]);

  const cardColors = ["#5B8F81", "#6EB384", "#5B8F81"];

  return (
    <section className="instagram-section">
      <div className="section-content">
        <h1 className="section-title" id="green-yellow">
          Latest Social Posts
        </h1>

        <div className="cards-container">
          {cardLinks.map((link, index) => (
            <div
              key={index}
              className="instagram-card"
              style={{
                backgroundColor: cardColors[index],
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="card-content">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={link}
                  data-instgrm-version="14"
                >
                  {/* Instagram Post Content */}
                </blockquote>
              </div>
              
              <div className="card-overlay">
                <span className="view-post">View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsCards;

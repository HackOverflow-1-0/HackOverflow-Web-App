import React, { useEffect, useState } from 'react';
import "./InstagramReelsCards.css";

const getRandomRotation = () => Math.floor(Math.random() * (5 - (-5) + 1)) + -5; // Random rotation between -5 and 5 degrees

const InstagramReelsCards = () => {
  const [cardLinks, setCardLinks] = useState([
    'https://www.instagram.com/reel/C3U-ZjItVp6/?utm_source=ig_embed&amp;utm_campaign=loading',
    'https://www.instagram.com/reel/C35uDWLhkQq/?utm_source=ig_embed&amp;utm_campaign=loading',
    'https://www.instagram.com/reel/C33BAWGJdD1/?utm_source=ig_embed&amp;utm_campaign=loading',
  ]);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          {/* Latest Social Posts Section */}
          <h1
            className="sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Latest Social Posts
          </h1><br></br>

          {/* Card Container */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 md:space-x-1 lg:space-x-10 xl:space-x-20 2xl:space-x-28 justify-center mt-4 md:flex-col lg:flex-row xl:flex-row">
            {/* First Card */}
            <div
              className="flex-none p-1 rounded-lg shadow-lg transform"
              style={{
                backgroundColor: '#FFD700', // Set your desired background color
                rotate: `${getRandomRotation()}deg`,
                height: '836px', // Set a fixed height
                overflow: 'hidden', // Hide overflow content
              }}
            >
              {/* Instagram Embed Code */}
              <blockquote
                className="instagram-media mx-auto"
                data-instgrm-captioned
                data-instgrm-permalink={cardLinks[0]}
                data-instgrm-version="14"
                style={{ maxWidth: '120px' }}
              >
                {/* Instagram Post Content */}
              </blockquote>
            </div>

            {/* Second Card */}
            <div
              className="flex-none p-1 rounded-lg shadow-lg"
              style={{
                backgroundColor: '#FFA07A', // Set your desired background color
                rotate: `${getRandomRotation()}deg`,
                height: '765px', // Set a fixed height
                overflow: 'hidden', // Hide overflow content
              }}
            >
              {/* Instagram Embed Code */}
              <blockquote
                className="instagram-media mx-auto"
                data-instgrm-captioned
                data-instgrm-permalink={cardLinks[1]}
                data-instgrm-version="14"
                style={{ maxWidth: '120px' }}
              >
                {/* Instagram Post Content */}
              </blockquote>
            </div>

            {/* Third Card */}
            <div
              className="flex-none p-1 rounded-lg shadow-lg transform"
              style={{
                backgroundColor: '#7FFFD4', // Set your desired background color
                rotate: `${getRandomRotation()}deg`,
                height: '810px', // Set a fixed height
                overflow: 'hidden', // Hide overflow content
              }}
            >
              {/* Instagram Embed Code */}
              <blockquote
                className="instagram-media mx-auto"
                data-instgrm-captioned
                data-instgrm-permalink={cardLinks[2]}
                data-instgrm-version="14"
                style={{ maxWidth: '120px' }}
              >
                {/* Instagram Post Content */}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default InstagramReelsCards;

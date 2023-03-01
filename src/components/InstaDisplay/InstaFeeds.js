import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Feed from "./Feed";

import "./instaFeeds.css";

const InstaFeeds = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;

  //   const fetchStories = async () => {
  //     await axios
  //       .get(
  //         `https://graph.instagram.com/me/stories?fields=id,media_url&limit=${props.limit}&access_token=${tokenProp.current}`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //   };

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();
    //fetchStories();
    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <>
      <div className="InstaSvg pt-8 pb-2 flex flex-row justify-center items-center space-x-4">
        <div>
          <a rel="noreferrer" target="_blank" href="https://phcet.tech/insta">
            <svg
              fill="#eee"
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
        </div>
        <div>
          <h2 className="text-[1.3rem] md:text-[2rem] mb-0">
            Follow us on{" "}
            <a
              className="InstaLink"
              href="https://phcet.tech/insta"
              target="_blank"
              rel="noreferrer"
            >
              @hackoverflow.tech
            </a>
          </h2>
        </div>
      </div>

      <div className="container InstaFeed grid grid-cols-2 gap-8 md:grid md:grid-cols-3 md:gap-10 p-4 mb-6">
        {feeds.map((feed) => (
          <>
            <a
              href={`https://phcet.tech/insta`}
              target="_blank"
              rel="noreferrer"
            >
              <Feed key={feed.id} feed={feed} />
            </a>
          </>
        ))}
      </div>
    </>
  );
};

export default InstaFeeds;

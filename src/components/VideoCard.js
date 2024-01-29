import React from "react";
import "./VideoCard.css";
// import video from "../assets/img/15.mp4";

function VideoCard({ title, image, video, dataAos, weblink }) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      data-aos={dataAos}
    >
      <div className={"mainvideocard relative"}>
        <a href={weblink} target="_blank" rel="noreferrer">
          <video
            autoPlay
            loop
            muted
            className="bg-video absolute top-0 left-0 overflow-hidden"
          >
            <source src={video} type="video/webm" />
          </video>
        </a>
      </div>
    </div>
  );
}

export default VideoCard;

import React from "react";
import "./GlobeNewComponent.css";
import MapChart from "../MapChart/MapChart";

export const GlobeNewComponent = () => {
  return (
    <div className="container pt-16 px-5">
      <div className="pb-8 flex flex-col items-center sm:flex xl:flex-row sm:items-center">
        <div className="lg:w-1/2 xl:w-[26%]">
          <h2 className="globe-h2 xl:text-left">
            Participations across all over India!!!
          </h2>
          <div className="states-h1">
            <h1 id="blue-cyan">Uttar Pradesh</h1>
            <h1 id="purple-pink">Maharashtra</h1>
            <h1 id="green-yellow">West Bengal</h1>
            <h1 id="orange-pink">Karnataka</h1>
            <h1 id="state-5">Telengana</h1>
            <h1 id="state-6">Haryana</h1>
            <h1 id="state-7">Gujarat</h1>
            <h1 id="state-8">Delhi</h1>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-[80%] mr-[65rem] sm:mr-[97rem] lg:mr-[128rem] xl:mr-[45rem] 2xl:mr-[46rem]">
          <MapChart />
        </div>
      </div>
    </div>
  );
};

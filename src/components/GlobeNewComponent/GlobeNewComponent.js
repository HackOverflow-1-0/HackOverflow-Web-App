import React from "react";
import "./GlobeNewComponent.css";
import MapChart from "../MapChart/MapChart";

export const GlobeNewComponent = () => {
  return (
    <div
      className="container pt-10 px-5"
      // style={{ margin: "40px 0", padding: "20px" }}
    >
      {/* <div className="pb-8 flex flex-col items-center justify-center sm:flex sm:flex-row sm:item-start sm:justify-between sm:items-center"> */}
      <div className="pb-8 flex flex-row items-center justify-between">
        <div className="lg:w-1/2 xl:w-[25%]">
          <h2 className="globe-h2">Participations across all over India!!!</h2>
          <div className="states-h1">
            <h1 id="blue-cyan">UttarPradesh</h1>

            <h1 id="purple-pink">Maharashtra</h1>
            <h1 id="orange-pink">West Bengal</h1>
            <h1 id="green-yellow">Karnataka</h1>

            <h1 id="orange-pink">Telengana</h1>
            <h1 id="purple-pink">Haryana</h1>
            <h1 id="blue-cyan">Gujarat</h1>
            <h1 id="green-yellow">Delhi</h1>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-[80%]">
          <MapChart />
        </div>
      </div>
    </div>
  );
};

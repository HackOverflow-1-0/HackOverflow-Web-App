import Globe from "react-globe.gl";
// import data from "./data";
import { useRef, useState, useEffect } from "react";
import locationImages from "./assets/img/coder-01.png";
const data = {
  entries: {
    loc: [
      {
        name: "Delhi",
        lat: 28.6105119,
        lng: 77.1103381,
        size: 0.1,
        color: "white",
      },
      {
        name: "Bengaluru",
        lat: 12.954517,
        lng: 77.3507357,
        size: 0.1,
        color: "white",
      },
      {
        name: "Kolkata",
        lat: 22.5355708,
        lng: 88.2773118,
        size: 0.1,
        color: "white",
      },
      {
        name: "phcet",
        lat: 18.8932418,
        lng: 73.1741628,
        size: 0.1,
        color: "white",
      },
    ],
    arcs: [
      {
        name: "Delhi",
        startLat: 28.6105119,
        startLng: 77.1103381,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.1,
      },
      {
        name: "Kolkata",
        startLat: 22.5355708,
        startLng: 88.2773118,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.1,
      },
      {
        name: "Bengaluru",
        startLat: 12.954517,
        startLng: 77.3507357,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.1,
      },
    ],
  },
};

export default function GlobeComp() {
  const globeEl = useRef();
  const store = data["entries"];

  // const weightColor = d3
  //   .scaleSequentialSqrt(d3.interpolateYlOrRd)
  //   .domain([0.1, 0.2]);
  return (
    <div className="container z-0">
      <div className="row">
        <div className="col-6">
          <h1 style={{ fontFamily: "Helvetica Bold" }}>
            Participations from all over India!!!
          </h1>
        </div>
        <div className="col-6">
          <Globe
            ref={globeEl}
            onGlobeReady={() =>
              // start
              //globeEl.current.pointOfView({ lat: 30, lng: 7, altitude: 2 }, 5000)
              // init year n
              //   globeEl.current.pointOfView({ lat: 30, lng: 180, altitude: 0 }, 100)
              console.log(globeEl.current.getCurrentPosition())
            }
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundColor="#1b1c27"
            // edges
            arcsData={store["arcs"]}
            arcDashLength={(d) => d.stroke - 0.1 + 0.3}
            // arcDashLength={(d) => d.stroke - 0.1}
            arcDashGap={(d) => 0.1 + (1 - (d.stroke - 0.1))}
            arcDashAnimateTime={(d) => (1.1 - d.stroke) * 5000 + 2000}
            arcStroke={"stroke"}
            //arcCircularResolution={64}
            // arcLabel={() => "test"}
            // labels
            labelsData={store["loc"]}
            labelLat={(d) => d.lat}
            labelLng={(d) => d.lng}
            labelText={(d) => d.name}
            labelSize={(d) => 0.5 + d.size}
            labelDotRadius={(d) => 0.5 + d.size}
            // labelColor={(d) => weightColor(d.size)}
            labelResolution={2}
            // bars
            hexBinPointsData={store["loc"]}
            hexBinPointWeight="size"
            // hexAltitude={(d) => d.sumWeight / 4}
            hexBinResolution={4}
            // hexTopColor={(d) => weightColor(d.sumWeight)}
            // hexSideColor={(d) => weightColor(d.sumWeight)}
            hexBinMerge={true}
            enablePointerInteraction={false}
          />
        </div>
      </div>
    </div>
  );
}

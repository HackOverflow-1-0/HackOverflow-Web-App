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



  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = false;
    globeEl.current.controls().autoRotateSpeed = 0.7;
  }, []);

  useEffect(() => {
    const camera = globeEl.current.camera();
    camera.zoom += 2;
    globeEl.current.pointOfView({ lat: camera.lat, lng: camera.lng, altitude: camera.altitude });
  }, []);


  return (
    <div className="container">
      <div className="pb-8 flex flex-col sm:flex sm:flex-row sm:item-start sm:justify-between">
        <div className="">
          <h1 style={{ fontFamily: "Helvetica Bold" }}>
            Participations across all over India!!!
          </h1>
        </div>
        <div className="">
          <Globe

            globeRadius={30}
            initialZoom={30}
            ref={globeEl}
            onGlobeReady={() => {
              globeEl.current.pointOfView({ lat: 20.0903616, lng: 78.4533449 })
              globeEl.current.camera().zoom = 20;
            }
            }
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundColor="#1b1c27"
            arcsData={store["arcs"]}
            arcDashLength={(d) => d.stroke - 0.1 + 0.3}
            arcDashGap={(d) => 0.1 + (1 - (d.stroke - 0.1))}
            arcDashAnimateTime={(d) => (1.1 - d.stroke) * 5000 + 2000}
            arcStroke={"stroke"}
            labelsData={store["loc"]}
            labelLat={(d) => d.lat}
            labelLng={(d) => d.lng}
            labelText={(d) => d.name}
            labelSize={(d) => 0.5 + d.size}
            labelDotRadius={(d) => 0.5 + d.size}
            labelResolution={2}
            hexBinPointsData={store["loc"]}
            hexBinPointWeight="size"
            hexBinResolution={4}
            hexBinMerge={true}
            enablePointerInteraction={true}
          />

        </div>
      </div>
    </div>

  );
}

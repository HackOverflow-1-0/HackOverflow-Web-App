import Globe from "react-globe.gl";
import "./globe.css";
import { useRef, useEffect } from "react";
// import locationImages from "./assets/img/coder-01.png";
const data = {
  entries: {
    loc: [
      {
        name: "Delhi",
        lat: 28.6105119,
        lng: 77.1103381,
        size: 0.1,
        color: "white",
        icon: "./assets/img/coder-01.png",
      },
      {
        name: "Vadodara",
        lat: 22.3072,
        lng: 73.1812,
        size: 0.1,
        color: "white",
        icon: "./assets/img/coder-01.png",
      },
      {
        name: "Lucknow",
        lat: 26.8467,
        lng: 80.9462,
        size: 0.1,
        color: "white",
        icon: "./assets/img/coder-01.png",
      },
      {
        name: "Bhubaneswar",
        lat: 20.2961,
        lng: 85.8245,
        size: 0.1,
        color: "white",
        icon: "./assets/img/coder-01.png",
      },
      {
        name: "Bengaluru",
        lat: 12.954517,
        lng: 77.3507357,
        size: 0.1,
        color: "white",
        icon: './assets/img/coder-01.png'
      },

      {
        name: "Kolkata",
        lat: 22.5355708,
        lng: 88.2773118,
        size: 0.1,
        color: "white",
        icon: "./assets/img/coder-01.png",
      },
      {
        name: "HackOverflow",
        lat: 18.8932418,
        lng: 73.1741628,
        size: 0.6,
        color: "purple",
        icon: "./assets/img/coder-01.png",
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
        stroke: 0.5,
      },
      {
        name: "Vadodara",
        startLat: 22.3072,
        startLng: 73.1812,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.5,
      },
      {
        name: "Lucknow",
        startLat: 26.8467,
        startLng: 80.9462,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.5,
      },
      {
        name: "Bhubaneswar",
        startLat: 20.2961,
        startLng: 85.8245,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.5,
      },
      {
        name: "Kolkata",
        startLat: 22.5355708,
        startLng: 88.2773118,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.5,
      },
      {
        name: "Bengaluru",
        startLat: 12.954517,
        startLng: 77.3507357,
        endLat: 18.8932418,
        endLng: 73.1741628,
        color: ["white"],
        stroke: 0.5,
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
    globeEl.current.controls().Rotate = false;
    globeEl.current.controls().autoRotateSpeed = 0.7;
  }, []);

  useEffect(() => {
    const camera = globeEl.current.camera();
    camera.zoom += 1.8;
    globeEl.current.pointOfView({
      lat: camera.lat,
      lng: camera.lng,
      altitude: camera.altitude,
    });
  }, []);

  return (
    <div className="sm:my-5 p-2 sm:px-4" style={{ margin: "40px 0", padding: "20px" }}>
      <div className="pb-8 flex flex-col sm:flex sm:flex-row sm:item-start sm:justify-between">
        <div className="">
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
        <div className="globe">
          <Globe
            className="globe"
            globeRadius={30}
            initialZoom={30}
            ref={globeEl}
            onGlobeReady={() => {
              globeEl.current.pointOfView({ lat: 20.0903616, lng: 78.4533449 });
              globeEl.current.camera().zoom = 20;
            }}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundColor="#1b1c27"
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
            arcsData={store["arcs"]}
            arcStroke="stroke"
            arcDashLength={(arc) => arc.stroke * 0.1}
            arcDashGap={(arc) => arc.stroke * 0.09}
            // arcDashAnimateTime={(arc) => arc.stroke * 2000}
            arcDashAnimateTime={(d) => (1.1 - d.stroke) * 5000 + 2000}
            arcColor={(arc) => {
              if (arc.stroke > 0) {
                return "#FF80BF"; // Red for large strokes
              } else {
                return "#FF80BF"; // White for small strokes
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

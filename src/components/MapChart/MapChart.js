import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

import LinearGradient from "./LinearGradient.js";
import "./MapChart.css";

/**
 * Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
 * Looking topojson for other countries/world?
 * Visit: https://github.com/markmarkoh/datamaps
 */
const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
// const COLOR_RANGE = [
//   "#F2E2F9", // Slightly darker light version
//   "#E7D4F4",
//   "#DCC6EF",
//   "#CAB3E6",
//   "#B29CD9",
//   "#9B85CC",
//   "#856EBF",
//   "#6E57B2", // Even darker dark version
// ];

const COLOR_RANGE = [
  "#5B8F81", "#4A7A6E", "#40655B", "#365048",
  "#2C3B35", "#222622", "#6FA295", "#85B5A9"
];

// const COLOR_RANGE = [
//   "#9C6AA6",
//   "#8B5F98",
//   "#7A548A",
//   "#69497C",
//   "#593E6E",
//   "#483360",
//   "#372854",
//   "#261D46",
// ];

const DEFAULT_COLOR = "#6E57B2";

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#2F5E53",
    transition: "all 250ms",
    outline: "none",
    cursor: "pointer",
  },
  pressed: {
    outline: "none",
  },
};

// will generate random heatmap data on every call
const getHeatMapData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: 20 },
    { id: "AR", state: "Arunachal Pradesh", value: 5 },
    { id: "AS", state: "Assam", value: 0 },
    { id: "BR", state: "Bihar", value: 5 },
    { id: "CT", state: "Chhattisgarh", value: 5 },
    { id: "GA", state: "Goa", value: 0 },
    { id: "GJ", state: "Gujarat", value: 20 },
    { id: "HR", state: "Haryana", value: 8 },
    { id: "HP", state: "Himachal Pradesh", value: 0 },
    { id: "JH", state: "Jharkhand", value: 26 },
    { id: "KA", state: "Karnataka", value: 27 },
    { id: "KL", state: "Kerala", value: 15 },
    { id: "MP", state: "Madhya Pradesh", value: 12 },
    { id: "MH", state: "Maharashtra", value: 20 },
    { id: "MN", state: "Manipur", value: 0 },
    { id: "ML", state: "Meghalaya", value: 0 },
    { id: "MZ", state: "Mizoram", value: 0 },
    { id: "NL", state: "Nagaland", value: 0 },
    { id: "OD", state: "Odisha", value: 0 },
    { id: "PB", state: "Punjab", value: 5 },
    { id: "RJ", state: "Rajasthan", value: 5 },
    { id: "SK", state: "Sikkim", value: 5 },
    { id: "TN", state: "Tamil Nadu", value: 5 },
    { id: "TS", state: "Telangana", value: 15 },
    { id: "TR", state: "Tripura", value: 14 },
    { id: "UK", state: "Uttarakhand", value: 5 },
    { id: "UP", state: "Uttar Pradesh", value: 30 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: 0 },
    { id: "CH", state: "Chandigarh", value: 5 },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 19 },
    { id: "DD", state: "Daman and Diu", value: 20 },
    { id: "DL", state: "Delhi", value: 59 },
    { id: "JK", state: "Jammu and Kashmir", value: 0 },
    { id: "LA", state: "Ladakh", value: 0 },
    { id: "LD", state: "Lakshadweep", value: 0 },
    { id: "PY", state: "Puducherry", value: 0 },
  ];
};

function MapChart() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());

  // const gradientData = {
  //   fromColor: COLOR_RANGE[0],
  //   toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
  //   min: 0,
  //   max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  // };

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: 100,
  };

  // const colorScale = scaleQuantile()
  //   .domain(data.map((d) => d.value))
  //   .range(COLOR_RANGE);

  const colorScale = scaleQuantile().domain([0, 100]).range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${current.value} from ${geo.properties.name}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };

  return (
    <div className="relative MapChart-full-width-height MapChart-container">
      {/* <h1 className="MapChart-no-margin MapChart-center">States and UTs</h1> */}
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <div className="Mapcircle flex items-center justify-center">
        <span
          className="text-[1rem] text-[ #E1A87A]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          20
        </span>
      </div>
      <div className="Mapcircle_2 flex items-center justify-center">
        <span
          className="text-[1rem] text-[ #E1A87A]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          30
        </span>
      </div>
      <div className="Mapcircle_3 flex items-center justify-center">
        <span
          className="text-[1rem] text-[ #E1A87A]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          20
        </span>
      </div>
      <div className="Mapcircle_4 flex items-center justify-center">
        <span
          className="text-[1rem] text-[ #E1A87A]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          20
        </span>
      </div>
      <div className="Mapcircle_5 flex items-center justify-center">
        <span
          className="text-[1rem] text-[ #E1A87A]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          5
        </span>
      </div>
      <div className="Mapcircle_6 flex items-center justify-center">
        <span
          className="text-[1rem] text-[ #E1A87A]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          20
        </span>
      </div>
      <div className="Mapcircle_7 flex items-center justify-center">
        <span
          className="text-[1rem] text-[ #E1A87A]"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          20
        </span>
      </div>

      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        // width={420}
        // height={200}
        width={580}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //console.log(geo.id);
              const current = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <LinearGradient data={gradientData} />
      <div className="MapChart-center">
        {/* <button className="MapChart-mt16" onClick={onChangeButtonClick}> */}
        <button className="MapChart-mt16">Teams Participated</button>
      </div>
    </div>
  );
}

export default MapChart;

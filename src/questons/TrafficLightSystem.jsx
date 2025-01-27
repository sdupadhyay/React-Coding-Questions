import { useEffect, useState } from "react";

export const TrafficLightSystem = () => {
  const config = [
    { color: "red", timer: 4000 }, // Red light for 4 seconds
    { color: "yellow", timer: 1000 }, // Yellow light for 0.5 seconds
    { color: "green", timer: 3000 }, // Green light for 3 seconds
  ];
  const [point, setPoint] = useState(0);

  useEffect(() => {
    let id = setTimeout(() => {
      console.log("Pointer", point);
      if (point < config.length - 1) setPoint((pre) => (pre + 1) % 3);
      else setPoint(0);
    }, config[point]?.timer);
    return () => clearTimeout(id);
  }, [point]);
  //console.log(config[point])
  return (
    <>
      <h1>Traffic Light System</h1>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        {[0, 1, 2]?.map((ele, ind) => (
          <Light
            key={ind}
            backgroundColor={ind == point ? config[point]?.color : "white"}
          />
        ))}
      </div>
      <p>{config[point]?.color} Light</p>
    </>
  );
};
const Light = ({ backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        margin: "auto",
        border: "1px solid black",
      }}
    ></div>
  );
};

import React from "react";

const CardComp = ({ src, heading, subText }) => {
  return (
    <div
      style={{
        marginLeft: "1rem",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
        borderRadius: "10px",
        height: "360px",
        width: "300px",
        background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
        color: "white",
        padding: "1.5rem 1rem 1rem 1rem", // Adjust padding for the image space
        position: "relative", // Set position relative for absolute positioning of child
      }}
    >
      <div>
        <h1 style={{ fontSize: "20px" }}>{heading}</h1>
        <p style={{ fontSize: "14px" }}>{subText}</p>
      </div>
      <div
        style={{
          position: "absolute", // Set position absolute for the image
          bottom: "1rem", // Distance from the bottom
          right: "1rem", // Distance from the right
        }}
      >
        <img
          style={{ height: 100, width: 100 }}
          src={src}
          alt="Images"
        />
      </div>
    </div>
  );
};

export default CardComp;

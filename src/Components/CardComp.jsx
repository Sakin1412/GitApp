import React from "react";
import "./Card.css";

const CardComp = () => {
  return (
    <>
    <h1 style={{color:"white", fontSize:35, marginLeft:"110px", fontFamily:"sans-serif"}}>More Reasons to Join</h1>
    
    <div className="parent"  
    style={{ marginBottom: "4rem",
    width: "100%",           /* Reduce width to make the components closer */
    padding: "1rem",        /* Add some padding for inner spacing */
    display: "flex", 
    justifyContent: "space-evenly", 
    gap: "1rem"      
     }}>
      <div
        className="cardcontainer1"
        style={{
          display: "block",
          unicodeBidi: "isolate",
          marginTop: "0.75rem",
          marginLeft: "1rem",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
          borderRadius: "10px",
          height: "360px",
          width: "300px",
          background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
          color: "white",
          padding: "1.5rem 1rem 8rem 1rem" /* Adds space inside the card */,
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.2)" /* Card shadow for 3D effect */,
          textAlign: "left" /* left the text inside the card */,
          display: "flex" /* Flexbox to center the content */,
          flexDirection: "column" /* Align content vertically */,
          justifyContent: "flex-start" /* flex start content vertically */,
          gap: "5px" /* Adds spacing between the elements */,
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: "29px" }}>
          Enjoy on your TV
        </h1>
        <p style={{ fontSize: "20px" }}>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
        <div
          className="shape1"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img
            style={{ marginTop: "65px" }}
            src="Background.png"
            alt="MY DIV SHAPE"
          />
        </div>
      </div>

      <div
        className="cardcontainer2"
        style={{
          display: "block",
          unicodeBidi: "isolate",
          marginTop: "0.75rem",
          marginLeft: "1rem",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
          borderRadius: "10px",
          height: "360px",
          width: "300px",
          background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
          color: "white",
          padding: "1.5rem 1rem 8rem 1rem" /* Adds space inside the card */,
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.2)" /* Card shadow for 3D effect */,
          textAlign: "left" /* left the text inside the card */,
          // display: "flex" /* Flexbox to center the content */,
          flexDirection: "column" /* Align content vertically */,
          justifyContent: "flex-start" /* flex start content vertically */,
          gap: "5px" /* Adds spacing between the elements */,
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: "29px" }}>
          Download your shows to watch offline
        </h1>
        <p style={{ fontSize: "20px" }}>
          Save your favorites easily and always have something to watch.
        </p>
        <div
          className="shape2"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img
            style={{ marginTop: "15px" }}
            src="Background.png"
            alt="MY DIV SHAPE"
          />
        </div>
      </div>

      <div
        className="cardcontainer3"
        style={{
          display: "block",
          unicodeBidi: "isolate",
          marginTop: "0.75rem",
          marginLeft: "1rem",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
          borderRadius: "10px",
          height: "360px",
          width: "300px",
          background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
          color: "white",
          padding: "1.5rem 1rem 8rem 1rem" /* Adds space inside the card */,
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.2)" /* Card shadow for 3D effect */,
          textAlign: "left" /* left the text inside the card */,
          // display: "flex" /* Flexbox to center the content */,
          flexDirection: "column" /* Align content vertically */,
          justifyContent: "left" /* flex start content vertically */,
          gap: "5px" /* Adds spacing between the elements */,
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: "29px" }}>
          Watch everywhere
        </h1>
        <p style={{ fontSize: "20px" }}>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
        <div
          className="shape3"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img
            style={{ marginTop: "56px" }}
            src="Background.png"
            alt="MY DIV SHAPE"
          />
        </div>
      </div>

      <div
        className="cardcontainer4"
        style={{
          display: "block",
          unicodeBidi: "isolate",
          marginTop: "0.75rem",
          marginLeft: "1rem",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
          borderRadius: "10px",
          height: "360px",
          width: "300px",
          background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
          color: "white",
          padding: "1.5rem 1rem 8rem 1rem"  /* Adds space inside the card */,
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.2)" /* Card shadow for 3D effect */,
          textAlign: "left" /* left the text inside the card */,
          // display: "flex" /* Flexbox to center the content */,
          flexDirection: "column" /* Align content vertically */,
          justifyContent: "left" /* flex start  content vertically */,
          gap: "5px" /* Adds spacing between the elements */,
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: "29px" }}>
          Create profiles for kids
        </h1>
        <p style={{ fontSize: "20px" }}>
          Send kids on adventures with their favorite characters in a space made
          just for them — free with your membership.
        </p>
        <div
          className="shape4"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img
            style={{ marginTop: "35px" }}
            src="Background.png"
            alt="MY DIV SHAPE"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default CardComp
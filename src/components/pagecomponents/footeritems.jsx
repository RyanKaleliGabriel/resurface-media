import React from "react";
import { useState } from "react";

function Footeritemone(props) {
  const [isHover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }

  return (
    <div
      className="footerChild"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <button
        className="btn-iconone"
        style={isHover ? { background: "none", border: "2px solid white" } : {}}
      >
        <i
          style={{ color: "white", fontSize: "2rem" }}
          className={props.iconone}
        ></i>
      </button>
      <h1>{props.numberone}</h1>
      <h5>{props.contentone}</h5>
    </div>
  );
}

function Footeritemfour(props) {
  const [isHover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }

  return (
    <a
      href={props.link}
      style={{
        marginLeft: "4rem",
        marginBottom: "2.5rem",
        marginTop: "1rem",
        textDecoration: "none",
        color: "grey",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <i
        style={{
          marginRight: "1rem",
          borderRadius: "100%",
          border: "1px solid #0b8cf4 ",
          padding: "10px",
          background: isHover ? "#0b8cf4" : "transparent",
          color: isHover ? "white" : "grey",
        }}
        className={props.iconclass}
      ></i>
      {props.paragraph}
      <br />
      <br />
    </a>
  );
}
function Footeritemtwo(props) {
  const [isHover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }
  return (
    <div className="downloadbtnChild">
    <a href="https://play.google.com/store/apps/details?id=com.shiftechafrica.resurface">
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="footerdownloadbtn"
        style={{ background: isHover ? "#0b8cf4" : "transparent" }}
      >
        <p style={{ margin: "0" }}>
          <i
            style={{ fontSize: "2rem", marginRight: "1rem" }}
            className={props.icon}
          ></i>
          {props.paragraph}
          {props.heading}
        </p>
      </button>
      </a>
    </div>
  );
}

function Footeritemthree(props) {
  const [isHover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }
  return (
    <div className="footersmallIconsChild">
    <a href="#">
      <i
        style={{
          marginRight: "1rem",
          borderRadius: "100%",
          border: "1px solid none",
          padding: "10px",
          background: isHover ? "#0b8cf4" : "white",
          color: isHover ? "white" : "#0b8cf4",
        }}
        className={props.iconclass}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></i>
      </a>
    </div>
  );
}
export { Footeritemfour, Footeritemone, Footeritemtwo, Footeritemthree };

import React from "react";
import { useState } from "react";

function Aboutitems(props) {
  const [isHover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="servicesChild"
      style={isHover ? { border: "1px solid rgba(128, 128, 128, 0.3)" } : {}}
    >
      <i className={props.servicon} style={{ marginBottom: "1.5rem" }}></i>
      <h4 style={{ marginBottom: "1.5rem" }}>{props.servheading}</h4>
      <p>{props.servparagraph}</p>
    </div>
  );
}

export default Aboutitems;

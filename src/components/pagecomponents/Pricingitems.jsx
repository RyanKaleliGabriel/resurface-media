import React from "react";
import { useState } from "react";

function Pricingitems(props) {
  const [isHover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }

  return (
    <div
      className="pricingChild"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h2>{props.px}</h2>
      <p style={{color:"grey"}}>{props.ptype}</p>
      <p style={{ fontStyle: "italic", color:"grey" }}>{props.pabout}</p>
      <h1 style={isHover ? { background: "#0b8cf4", color: "white" } : {}}>
        {props.ppricing}
        <p
          style={isHover ? { background: "#0b8cf4", color: "white" } : {}}
          className="ptype"
        >
          {props.ptypetwo}
        </p>
      </h1>

      <div>
        {props.puses.map((use, index) => (
          <p style={{ color: "grey" }} key={index}>
            {use}
            <span>
              <hr className="hrpricing" />
            </span>
          </p>
        ))}
      </div>
      <button
        style={isHover ? { backgroundColor: "#0b8cf4", color: "white" } : {}}
        className="btn-pricing"
      >
        {props.pbtn}
      </button>
    </div>
  );
}

export default Pricingitems;

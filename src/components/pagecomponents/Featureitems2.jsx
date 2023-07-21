import React from "react";
import { useState } from "react";

function Featureitems2(props) {
  const [isHover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  return (
    <div
      className="secondfeature"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <i
        style={{
          float: "left",
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "50%",
          border: "2px dashed white",
          ...(isHover
            ? { border: "2px dashed white", borderRadius: "5px" }
            : {}),
        }}
        className={props.feticon}
      ></i>
      <h4>{props.fetheading}</h4>
      <p>{props.fetparagraph}</p>
    </div>
  );
}

export default Featureitems2;

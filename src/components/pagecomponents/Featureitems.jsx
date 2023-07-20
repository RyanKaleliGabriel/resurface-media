import React from "react";
import { useState } from "react";

function Featureitems(props) {
  return (
    <div className="featureItems">
      <i className={props.feticon}></i>
      <h4>{props.fetheading}</h4>
      <p>{props.fetparagraph}</p>
    </div>
  );
}

export default Featureitems;

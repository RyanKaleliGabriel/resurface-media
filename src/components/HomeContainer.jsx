import React from "react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";

function HomeContainer(props){
  return(
    <CCarouselItem>
      <div className="homeContainer">
        <div className="homeItems" style={{ flexBasis: "500px" }}>
          <h1 className="homeHeading">
          {props.contheading}
          </h1>
          <p>
          {props.contparagraph}
          </p>
          <button className="btn-home">{props.btn1}</button>
          <button className="btn-home">{props.btn2}</button>
        </div>
        <div className="homeItems" style={{ flexBasis: "350px" }}>
          <img src={props.img} className="home-imgs" alt="#"></img>
        </div>
     </div>
    </CCarouselItem>
  )
}

export default HomeContainer;
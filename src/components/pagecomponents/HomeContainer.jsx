import React from "react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import promoting from "../../assests/promotingimg.png";
import enganging from "../../assests/engagingimg.png";
import influencing from "../../assests/influencingimg.png";
import growing from "../../assests/growingimg.png";


const homeDetails = [
  {
    heading: "It’s all about Growing your Social Media",
    paragraph: "We are a brand that puts your social media pages outside there, for more followers, views and subscribers.",
    image: growing,
    buttonOne: "Google Play",
    buttonTwo: "App Store"
  },
  {
    heading: "It’s all about Promoting your Business",
    paragraph: "Let the world know what you offer with ease.",
    image: promoting,
    buttonOne: "Google Play",
    buttonTwo: "App Store"
  },
  {
    heading: "It’s all about Engaging your Customers",
    paragraph: "Give your customers real-time brand awareness of your services and products.",
    image: enganging,
    buttonOne: "Google Play",
    buttonTwo: "App Store"
  },
  {
    heading: "It’s all about Influencing and Earning",
    paragraph: "Become a resurface media influencer to market and earn at the same time.",
    image: influencing,
    buttonOne: "Google Play",
    buttonTwo: "App Store"
  }
];


function HomeContainer(props) {
  return (
    <CCarousel  transition="crossfade">
    {homeDetails.map((item, index)=>(
      <CCarouselItem key={index}>
        <div className="homeContainer">
          <div className="homeItems" style={{ flexBasis: "500px" }}>
            <h1 className="homeHeading">
             {item.heading}
            </h1>
            <p>
            {item.paragraph}
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.shiftechafrica.resurface">
            <button className="btn-home">{item.buttonOne}</button>
            </a>
            <button className="btn-home">{item.buttonTwo}</button>
          </div>
          <div className="homeItems" style={{ flexBasis: "350px" }}>
            <img src={item.image} className="home-imgs" alt="#"></img>
          </div>
        </div>
      </CCarouselItem>
    ))}

    </CCarousel>
  );
}

export default HomeContainer;

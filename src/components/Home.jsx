import React from "react";
import promoting from "../assests/promotingimg.png";
import enganging from "../assests/engagingimg.png";
import influencing from "../assests/influencingimg.png";
import growing from "../assests/growingimg.png";
import HomeContainer from "./HomeContainer";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";


function Home() {

  const homeDetails = [
    {
      heading:"It’s all about Growing your Social Media",
      paragraph:"We are a brand that puts your social media pages outside there, for more followers, views and subscribers.",
      image:growing,
      buttonOne:"Google Play",
      buttonTwo:"App Store"
    },
    {
      heading:"It’s all about Promoting your Business",
      paragraph:"Let the world know what you offer with ease.",
      image:promoting,
      buttonOne:"Google Play",
      buttonTwo:"App Store"
    },
    {
      heading:"It’s all about Engaging your Customers",
      paragraph:"Give your customers real-time brand awareness of your services and products.",
      image:enganging,
      buttonOne:"Google Play",
      buttonTwo:"App Store"
    },
    {
      heading:"It’s all about Influencing and Earning",
      paragraph:"Become a resurface media influencer to market and earn at the same time.",
      image:influencing,
      buttonOne:"Google Play",
      buttonTwo:"App Store"
    }
  ];
  function createHomeContainer(homeContainerDetail){
    return(
      <CCarousel controls transition="crossfade">
      <HomeContainer 
      contheading={homeContainerDetail.heading}
      contparagraph={homeContainerDetail.paragraph}
      img={homeContainerDetail.image}
      btn1={homeContainerDetail.buttonOne}
      btn2={homeContainerDetail.buttonTwo}
      />
      </CCarousel>
    )

  }

  return (
    <div>
      {homeDetails.map(createHomeContainer)}
    </div>
  );
}

export default Home;

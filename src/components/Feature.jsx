import React from "react";
import Featureitems from "./pagecomponents/Featureitems";
import feature from "../assests/feature.png";

function Feature() {
  const features = [
    {
      icon: "icon",
      heading: "Realtime Notifications",
      paragraph: "We provide both email and sms notifications",
    },
    {
      icon: "icon",
      heading: "Trends",
      paragraph: "We provide real-time marketing trends of your brands.",
    },
    {
      icon: "icon",
      heading: "Marketing/Influencing",
      paragraph:
        "Our app not only provides means for earning but empowers influencer's to reach a large audience with ease.",
    },
    {
      icon: "icon",
      heading: "Link Posting/Sharing",
      paragraph:
        "We give your brand full access to post any social media link for marketing any service/product.",
    },
  ];
  const featuresTwo = [
    {
      icon: "icon",
      heading: "Realtime Analytics",
      paragraph:
        "We provide different areas of analytics of how the market is reacting to your pages.",
    },
    {
      icon: "icon",
      heading: "Influencer Earning",
      paragraph:
        "We credit all influencer's who use our platform for marketing.",
    },
    {
      icon: "icon",
      heading: "Brand Awareness",
      paragraph:
        "Let people know what your businesss is all about in a day to day schedule.",
    },
    {
      icon: "icon",
      heading: "Helping Supports",
      paragraph: "We provide 24/07 support on all areas of marketing.",
    },
  ];

  function createEntry(entrydetail) {
    return(
    <Featureitems
      feticon={entrydetail.icon}
      fetheading={entrydetail.heading}
      fetparagraph={entrydetail.paragraph}
    />
    )
  }
  return (
    <div className="featureContainer">
      {features.map(createEntry)}
      <div className="featureItems">
      <img alt="" src={feature} style={{width:"100%"}}></img>
      </div>
      {featuresTwo.map(createEntry)}
    </div>
  );
}

export default Feature;

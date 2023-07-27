import React from "react";
import Featureitems from "./pagecomponents/Featureitems";
import feature from "../assests/feature.png";
import Featureitems2 from "./pagecomponents/Featureitems2";

function Feature() {
  const features = [
    {
      icon: "fas fa-bell",
      heading: "Realtime Notifications",
      paragraph: "We provide both email and sms notifications",
    },
    {
      icon: "fas fa-chart-line ",
      heading: "Trends",
      paragraph: "We provide real-time marketing trends of your brands.",
    },
    {
      icon: "fas fa-users",
      heading: "Marketing/Influencing",
      paragraph:
        "Our app not only provides means for earning but empowers influencer's to reach a large audience with ease.",
    },
    {
      icon: "fas fa-link",
      heading: "Link Posting/Sharing",
      paragraph:
        "We give your brand full access to post any social media link for marketing any service/product.",
    },
  ];
  const featuresTwo = [
    {
      icon: "fas fa-chart-bar",
      heading: "Realtime Analytics",
      paragraph:
        "We provide different areas of analytics of how the market is reacting to your pages.",
    },
    {
      icon: "fas fa-wallet",
      heading: "Influencer Earning",
      paragraph:
        "We credit all influencer's who use our platform for marketing.",
    },
    {
      icon: "fas fa-user",
      heading: "Brand Awareness",
      paragraph:
        "Let people know what your businesss is all about in a day to day schedule.",
    },
    {
      icon: "fas fa-headphones",
      heading: "Helping Supports",
      paragraph: "We provide 24/07 support on all areas of marketing.",
    },
  ];

  function createEntry(entrydetail) {
    return (
      <Featureitems
        feticon={entrydetail.icon}
        fetheading={entrydetail.heading}
        fetparagraph={entrydetail.paragraph}
      />
    );
  }

  function createEntry2(entrydetail) {
    return (
      <Featureitems2
        feticon={entrydetail.icon}
        fetheading={entrydetail.heading}
        fetparagraph={entrydetail.paragraph}
      />
    );
  }
  return (
    <div id="FEATURE" className="feature">
      <div className="container">
        <div className="first-features">{features.map(createEntry)}</div>
        <div className="image-container">
          <img
            src={feature}
            alt=""
            style={{ width: "90%", height: "100%" }}
          ></img>
        </div>
        <div className="second-features">{featuresTwo.map(createEntry2)}</div>
      </div>
    </div>
  );
}

export default Feature;

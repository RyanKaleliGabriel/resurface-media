import React from "react";
import Aboutitems from "./pagecomponents/Aboutitems";
function About() {
  const services = [
    {
      key: 1,
      heading: "Social Media Link Sharing",
      icon: "fas fa-link",
      paragraph:
        "To ensure that your brand is well known, one of the key areas is by social media marketing through link sharing across platforms.",
    },
    {
      key: 2,
      heading: "Fast Customer Reach",
      icon: "fas fa-users",
      paragraph:
        "We are able to reach a large customer base of all ages. Through link sharing we are able to share this more than 100X times.",
    },
    {
      key: 3,
      heading: "Gradual Earning",
      icon: "fas fa-wallet",
      paragraph:
        "We provide credits to our influencer's who are able to share links and reach a large customer base.",
    },
  ];

  function createEntry(entryitem) {
    return (
      <Aboutitems
        servicon={entryitem.icon}
        servheading={entryitem.heading}
        servparagraph={entryitem.paragraph}
      />
    );
  }
  return (
    <div>
      <div className="centeredDivParent">
        <div className="centeredDivChild">
          <h2 style={{ marginBottom: "1.5rem" }}>About Resurface Media</h2>
          <hr className="horizontalLine" style={{ marginBottom: "1.5rem" }} />
          <p style={{color:"grey"}}>
            Resurface Media is a marketing brand, that focuses on
            <span>
              <br />
            </span>{" "}
            social media marketing. Through connecting brands and
            <span>
              <br />
            </span>{" "}
            businesses to our influencers.
          </p>
        </div>
      </div>
      <div className="servicesParent">{services.map(createEntry)}</div>
    </div>
  );
}

export default About;

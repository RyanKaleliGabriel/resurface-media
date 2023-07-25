import React from "react";
import Pricingitems from "./pagecomponents/Pricingitems";

function Pricing() {
  const packages = [
    {
      x: "10X",
      type: "Influencer",
      about: "Power to share and earn 10" + "\n" + "times.",
      pricing: "KES 50/MTH",
      typetwo: "10X",
      uses: [
        "Marketing",
        "Influence",
        "Link Posting",
        "Social Media Trends",
        "Free Trial",
      ],
      button: "Get Started"
    },
    {
      x: "20X",
      type: "Influencer",
      about: "Power to share and earn 20" + "\n" +  "times.",
      pricing: "KES 100/MTH",
      typetwo: "20X",
      uses: [
        "Marketing",
        "Influence",
        "Link Posting",
        "Social Media Trends",
        "Free Trial",
      ],
      button: "Get Started"
    },
    {
      x: "50X",
      type: "Influencer",
      about: "Power to share and earn 50" + "\n" +  " times.",
      pricing: "KES 200/MTH",
      typetwo: "50X",
      uses: [
        "Marketing",
        "Influence",
        "Link Posting",
        "Social Media Trends",
        "Free Trial",
      ],
      button: "Get Started"
    },
    {
      x: "100X",
      type: "Influencer",
      about: "Power to share and earn 100" + "\n" +  " times.",
      pricing: "KES 500/MTH",
      typetwo: "10X",
      uses: [
        "Marketing",
        "Influence",
        "Link Posting",
        "Social Media Trends",
        "Free Trial",
      ],
      button: "Get Started"
    },
  ];

  function createEntry(entrydetail)
  {
    return(
    <Pricingitems
        px={entrydetail.x}
        ptype={entrydetail.type}
        pabout={entrydetail.about}
        ppricing={entrydetail.pricing}
        ptypetwo={entrydetail.typetwo}
        puses={entrydetail.uses}
        pbtn={entrydetail.button}
    />
    );
  }

  return (
    <div>
      <div className="bluecenteredDivParent" >
        <div className="bluecenteredDivChild">
          <h2 style={{ marginBottom: "1.5rem" }}>Our Pricing Plan</h2>
          <hr className="bluehorizontalLine" />
          <p>
            For one to be an influencer you have to have an active
            <span>
              <br />
            </span>{" "}
            account that allows one to share/influence/market.
          </p>
        </div>
      </div>
      <div className="pricingParent">
      {packages.map(createEntry)}
      </div>
    </div>
  );
}


export default Pricing;
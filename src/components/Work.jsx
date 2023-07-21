import React from "react";

const work = [
  {
    heading: "Account Settings",
    paragraph: "The app gives option on settings to allow one to personalize.",
  },
  {
    heading: "Link Trends",
    paragraph:
      "App provides how well the posted link trends in different social media platforms.",
  },
  {
    heading: "Sharing Link",
    paragraph:
      "As an influencer/Marketer you have control of where to share the link for marketing.",
  },
  {
    heading: "Influencer Type",
    paragraph:
      "Any one can be an influencer all it takes is you to categories where you intend to fall basing with your social media influence.",
  },
  {
    heading: "Transactions",
    paragraph:
      "The app provides a view for you to see all your income and expenditure in a list of statements.",
  },
  {
    heading: "Category Marketing Preferences",
    paragraph:
      "As an influencer you are able to select all categories you intend to receive links on to influence..",
  },
  {
    heading: "Link Posting",
    paragraph:
      "For one to to market her/his social media, the app provides where you can post a link for influencing.",
  },
];

function Work() {
  return (
    <div>
      <div className="centeredDivParent">
        <div className="centeredDivChild">
          <h2 style={{ marginBottom: "1.5rem" }}>How It Works</h2>
          <hr className="horizontalLine" style={{ marginBottom: "1.5rem" }} />
          <p>This are a few ways you can use our app.</p>
        </div>
      </div>
      <div className="worContainer">
        <div className="workItems">
          <p>Account Setting</p>
          <button>
            <i class="fas fa-chevron-rig"></i>
          </button>
        </div>
        <div className="workItems"></div>
      </div>
      <div className="worContainer">
        <div className="workItems">
          <p>Account Setting</p>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="workItems"></div>
      </div>
      <div className="worContainer">
        <div className="workItems">
          <p>Account Setting</p>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="workItems"></div>
      </div>
      <div className="worContainer">
        <div className="workItems">
          <p>Account Setting</p>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="workItems"></div>
      </div>
      <div className="worContainer">
        <div className="workItems">
          <p>Account Setting</p>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="workItems">
        </div>
      </div>
      <div className="worContainer">
        <div className="workItems">
          <p>Account Setting</p>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="worContainer">
        <div className="workItems">
          <p>Account Setting</p>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;

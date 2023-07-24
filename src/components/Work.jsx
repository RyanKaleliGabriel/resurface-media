import React from "react";
import workaccount from "../assests/work-account.png";
import workinfluencer from "../assests/work-influencer.png";
import worklink from "../assests/work-link.png";
import workmarketing from "../assests/work-marketing.png";
import worksharing from "../assests/work-sharing.png";
import worktransactions from "../assests/work-transactions.png";
import workposting from "../assests/work-posting.png";

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
      <div className="workContainer">
        <div className="workItems">
          <h5>Account Setting</h5>
          <p>The app gives option on settings to allow one to personalize.</p>
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="workItems">
          <img src={workaccount} alt=""></img>
        </div>
      </div>
      <div className="workContainer">
        <div className="workItems">
          <img src={worklink} alt=""></img>
        </div>
        <div className="workItems">
          <h5>Link Trends</h5>
          <p>
            App provides how well the posted link trends in different social
            media platforms.
          </p>
          <button>
          <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
      <div className="workContainer">
        <div className="workItems">
          <h5>Sharing Link</h5>
          <p>
            As an influencer/Marketer you have control of where to share the
            link for marketing.
          </p>
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="workItems">
          <img src={worksharing} alt=""></img>
        </div>
      </div>
      <div className="workContainer">
        <div className="workItems">
          <img src={workinfluencer} alt=""></img>
        </div>
        <div className="workItems">
          <h5>Influencer Type</h5>
          <p>
            Any one can be an influencer all it takes is you to categories where
            you intend to fall basing with your social media influence.
          </p>
          <button>
          <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
      <div className="workContainer">
        <div className="workItems">
          <h5>Transactions</h5>
          <p>
            The app provides a view for you to see all your income and
            expenditure in a list of statements.
          </p>
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="workItems">
          <img src={worktransactions} alt=""></img>
        </div>
      </div>
      <div className="workContainer">
        <div className="workItems">
          <img src={workmarketing} alt=""></img>
        </div>
        <div className="workItems">
        <h5>Category Marketing Preferences</h5>
          <p>
            As an influencer you are able to select all categories you intend to
            receive links on to influence.
          </p>
          <button>
          <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
      <div className="workContainer">
        <div className="workItems">
          <h5>Link Posting</h5>
          <p>
            For one to to market her/his social media, the app provides where
            you can post a link for influencing.
          </p>
          <button>
            <i class="fa-solid fa-arrow-right "></i>
          </button>
        </div>
        <div className="workItems">
          <img src={workposting} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Work;

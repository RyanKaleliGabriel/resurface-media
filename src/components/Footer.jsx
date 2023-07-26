import React from "react";
import {
  Footeritemone,
  Footeritemfour,
  Footeritemtwo,
  Footeritemthree,
} from "./pagecomponents/footeritems";

export default function Footer() {
  const footerdataone = [
    { icon: "fa-solid fa-heart", number: "100k", content: "Happy Clients" },
    { icon: "fas fa-link", number: "1M", content: "Posted Links" },
    { icon: "fa-solid fa-users", number: "10M", content: "Reached Influence" },
    {
      icon: "fa-solid fa-arrow-trend-up",
      number: "50",
      content: "Social Media Trends",
    },
  ];

  const footerdatatwo = [
    {
      icon: "fa-brands fa-android",
      paragraph: "Available on",
      heading: " Android Store",
    },
    {
      icon: "fa-brands fa-apple",
      paragraph: "Available on",
      heading: " Apple Store",
    },
    {
      icon: "fa-brands fa-windows",
      paragraph: "Available on",
      heading: " Windows Store",
    },
  ];

  const footerdatathree = [
    { icon: "fa-brands fa-facebook-f" },
    { icon: "fa-brands fa-twitter" },
    { icon: "fa-brands fa-linkedin-in" },
    { icon: "fa-brands fa-pinterest-p" },
    { icon: "fa-brands fa-google-plus-g" },
  ];
  const footerdatafour = [
    {
      icon: "fa-solid fa-envelope",
      link: "mailto:infro@resurfacemedia.com",
      paragraph: "info@resurfacemedia.com",
    },
    {
      icon: "fa-solid fa-globe",
      link: "www.resurfacemedia.com",
      paragraph: "www.resurfacemedia.com",
    },
  ];

  function createentryone(entrydetail) {
    return (
      <Footeritemone
        iconone={entrydetail.icon}
        numberone={entrydetail.number}
        contentone={entrydetail.content}
      />
    );
  }
  function createentryfour(entrydetail) {
    return (
      <Footeritemfour
        link={entrydetail.link}
        iconclass={entrydetail.icon}
        paragraph={entrydetail.paragraph}
      />
    );
  }
  function createentrytwo(entrydetail) {
    return (
      <Footeritemtwo
        icon={entrydetail.icon}
        heading={entrydetail.heading}
        paragraph={entrydetail.paragraph}
      />
    );
  }
  function createentrythree(entrydetail) {
    return <Footeritemthree iconclass={entrydetail.icon} />;
  }

  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="footerParent">{footerdataone.map(createentryone)}</div>
      <div className="footerFormsParent">
        <div className="footerFormsChild" style={{ marginTop: "2rem" }}>
          <form>
            <h4
              style={{
                marginLeft: "4rem",
                marginBottom: "1rem",
                marginTop: "2.5rem",
              }}
            >
              Get in touch
            </h4>
            <input
              className="footer-input"
              placeholder="Enter your name"
            ></input>
            <br />
            <input
              className="footer-input"
              placeholder="Enter your email"
            ></input>
            <br />
            <input className="footer-input" placeholder="Your Subject"></input>
            <br />
            <textarea
              className="footer-input"
              placeholder="Message"
              cols={5}
              rows={5}
            ></textarea>
            <br />
            <button className="form-btn">Send Message</button>
          </form>
        </div>
        <div
          className="footerFormsChild"
          style={{ marginTop: "2rem", height: "350px" }}
        >
          <h4
            style={{
              marginLeft: "4rem",
              marginBottom: "1rem",
              marginTop: "2.5rem",
            }}
          >
            Address
          </h4>
          <p
            style={{
              marginLeft: "4rem",
              marginBottom: "3rem",
              marginTop: "3rem",
            }}
          >
            For more info kindly get in touch with us through our channels.
          </p>
          {footerdatafour.map(createentryfour)}
        </div>
      </div>
      <div className="downloadParent">
        <div className="downloadChild">
          <hr className="bluehorizontalLine" />
          <h2 style={{ marginBottom: "1.5rem" }}>Download Available</h2>
          <hr className="bluehorizontalLine" />
        </div>
      </div>
      <div className="downloadbtnParent">
        {footerdatatwo.map(createentrytwo)}
      </div>
      <div className="downloadParent">
        <div className="subscribeChild">
          <form>
            <input
              className="footerInput"
              placeholder="Your email address here"
            ></input>
            <button className="footerbutton">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footersmallIcons">
        {footerdatathree.map(createentrythree)}
      </div>
      <div className="downloadParent">
        <div className="subscribeChild">
          <p style={{ color: "white" }}>
            &copy; {currentYear} All rights reserved |{" "}
            <a style={{ color: "white", marginTop:"4px" }} href="">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a style={{ color: "white", marginTop:"4px" }} href="">
              Privacy Policy
            </a>{" "}
            | Powered by{" "}
            <a style={{ color: "white", marginTop:"4px" }} href="">
              SHIFTECH AFRICA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

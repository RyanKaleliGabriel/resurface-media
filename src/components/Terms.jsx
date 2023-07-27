import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Terms() {
  return (
    <div>
      <NavBar />
      <div className="termsParent">
        <div className="termsChild">
          <h3>Terms & Conditions</h3>
          <p>
            Welcome to our app. If you continue to browse and use this app, you
            are agreeing to comply with and be bound by the following terms and
            conditions of use, which together with our ‘Privacy Policy’,
            Resurface Media. (RM) relationship with you. The term “Resurface
            Media.” (or “RM”/“us”/“we”) refers to the owner of the app. The term
            “you” refers to the user or viewer of our app.
          </p>
        </div>
        <div className="termsChild">
          <h3>Privacy Policy</h3>
          <h5>Introduction</h5>
          <p>
            1.1. The RM (hereinafter referred to as ‘Application’) connects
            social media influencers to a wider range of sharing there social
            media links and acts as a marketing point for both parties to
            conduct transactions. Therefore, the Application is not only a
            platform that allows social media influencers and marketers to meet
            but also to allow both parties to conduct marketing safely;
          </p>
          <p>
            1.2. The general terms and conditions shall apply to social media
            influencers and marketers on the platform and shall govern the use
            of the Application and related services;
          </p>
          <p>
            1.3. If You use our platform during a business or other
            organizational project, then by doing so you confirmed that you have
            obtained the necessary authority to agree to these general terms and
            conditions and hence bind both yourself and the person, company or
            other legal entity that operates that business or organization and
            conditions.
          </p>
        </div>
        <div className="termsChild">
          <h5>Personal Information</h5>
          <p>
            2.1. The Application will require the submission of Personal
            Information when registering and posting content on the platform.
            The personal information required may be;
          </p>
          <ul>
            <li>Other Demographic or Location Information</li>
            <li>Name</li>
            <li>Credit or Debit Card Information</li>
            <li>Email Address</li>
            <li>Phone Number</li>
          </ul>
          <p>
            2.2. Personal Information may also be collected, or your IP Address
            logged when you login into our Application. Your IP information
            allows us to understand how you use our Application and enables us
            to make changes to our Application in order to improve your
            experience. Information regarding your computer/phone, your
            connection to our Application such as your browser type, operating
            system and platform and your user history including but not limited
            to your session information, page errors and the length of your
            visits to specific sites within our Application may also be
            collected.
          </p>
        </div>
        <div className="termsChild">
          <h5>The Data We Collect About You</h5>
          <p>
            3.1. We collect your personal data in order to provide and
            continually improve our services.
          </p>
          <p>
            3.2. We may collect, use, store and transfer the following different
            kinds of personal data about you:{" "}
          </p>
          <p>

            3.2.1. Information you provide to us: We receive and store the
            information you provide to us including your identity data, contact
            data, marketing data and financial data.
          </p>
          <p>
            3.2.2. Information on your use of our website and/or mobile
            applications: We automatically collect and store certain types of
            information regarding your use of the Resurface Media marketplace
            including information about your searches, views, downloads,
            uploads, purchases and sales.
          </p>
          <p>
            3.2.3. When you download or use apps created by us or our
            subsidiaries, we may receive information about your location and
            your mobile device, including a unique identifier for your device.
            We may use this information to provide you with location-based
            services, such as advertising, search results, and other
            personalized content.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

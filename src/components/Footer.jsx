import React from "react";

export default function Footer() {
  const footerdataone = [
    { icon: "", number: "100k", content: "Happy Clients" },
    { icon: "", number: "1M", content: "Posted Links" },
    { icon: "", number: "10M", content: "Reached Influence" },
    { icon: "", number: "50", content: "Social Media Trends" },
  ];

  const footerdatatwo = [
    {icon:"fa-brands fa-android", paragraph:"Available on", heading:"Android Store"},
    {icon:"fa-brands fa-apple", paragraph:"Available on", heading:"Apple Store"},
    {icon:"fa-brands fa-windows", paragraph:"Available on", heading:"Windows Store"},
  ];

  const footerdatathree = [
    {icon:"fa-brands fa-facebook-f"},
    {icon:"fa-brands fa-twitter"},
    {icon:"fa-brands fa-linkedin-in"},
    {icon:"fa-brands fa-pintrest-p"},
    {icon:"fa-brands fa-google-plus-g"},
  ];
  return (
    <div>
      <div className="footerParent">
        <div className="footerChild"></div>
        <div className="footerChild"></div>
        <div className="footerChild"></div>
        <div className="footerChild"></div>
        <div className="footerChild"></div>
        <div className="footerChild"></div>
        <div className="footerChild"></div>
      </div>
    </div>
  );
}

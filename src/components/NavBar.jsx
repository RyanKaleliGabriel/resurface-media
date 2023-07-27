import React, { useState } from "react";
import logo from "../assests/resurface-logo.png";
import NavLinks from "./pagecomponents/NavLinks";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const links = [
    {name: "HOME", link:"#HOME"},
    { name: "FEATURE", link:"#FEATURE" },
    { name: "OUR THEME", link:"#THEME" },
    { name: "PRICING", link:"#PRICING" },
    { name: "CONTACT US", link:"#CONTACT" },
  ];

  function createNavLink(navdetail) {
    return <NavLinks linkName={navdetail.name} link={navdetail.link} />;
  }

  const [isHover, setHover] = useState(false);
  const [isMenu, setMenu] = useState(false);

  function handlMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }
  function toggleMenu() {
    setMenu(!isMenu);
  }

  return (
    <div className="navBox">
      <div style={{position:"fixed", width:"100%", zIndex:"100"}}>
        <div className="navContainer">
          <nav className="nav">
            <img className="resurface-logo" src={logo} alt="#"></img>
            <section id="navSection">
              {links.map(createNavLink)}
              <a href="https://play.google.com/store/apps/details?id=com.shiftechafrica.resurface" className="btn-home" id="download-btn">
                Download
              </a>
            </section>
            <button id="navMenu" onClick={toggleMenu}>
              <MenuIcon className="navMenu" />
            </button>
          </nav>
        </div>
      </div>
      {isMenu && (
        <div className="menuItems animate__animated animate__bounceInDown">
          <a href="/#" className="navItems border-items">
            HOME
          </a>
          {links.map(createNavLink)}
          <a
            href="/#"
            className="navItems"
            onMouseOver={handlMouseOver}
            onMouseOut={handleMouseOut}
            style={isHover ? { border: "1px solid white" } : {}}
          >
            DOWNLOAD
          </a>
        </div>
      )}
    </div>
  );
}
//
export default NavBar;

import React, { useState } from "react";

function NavLinks(props) {
  const [isHover, setBorder] = useState(false);
  function handleOver() {
    setBorder(true);
  }
  function handleMouseOut() {
    setBorder(false);
  }

  return (
    <a
      href="/#"
      className="navItems"
      style={isHover ? { border: "1px solid white" } : {}}
      onMouseOut={handleMouseOut}
      onMouseOver={handleOver}
    >
      {props.linkName}
    </a>
  );
}

export default NavLinks;

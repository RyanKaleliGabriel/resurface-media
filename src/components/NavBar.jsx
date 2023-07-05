import React, {useState} from "react";
import logo from "../assests/resurface-logo.png"
import NavLinks from "./NavLinks";
import MenuIcon from '@mui/icons-material/Menu';



function NavBar(){

    const links = 
    [
      {name: "FEATURE"},
      {name: "OUR THEME"},
      {name: "PRICING"},
      {name: "CONTACT US"},
     ]

    function createNavLink(navdetail){
        return(
            <NavLinks
                linkName={navdetail.name}
            />
        )
    }

    const [isHover, setHover] = useState(false);
    const [isMenu, setMenu] = useState(false);

    function handlMouseOver(){
        setHover(true)
    }

    function handleMouseOut(){
        setHover(false)
    }
    function handleClick(){
        setMenu(true)
    }

    

    return(
        <div className="navContainer">
            <nav className="nav">
            <img  className="resurface-logo" src={logo} alt="#"></img>
                <a href="/#" className="navItems border-items">HOME</a>
                {links.map(createNavLink)}
                <a href="/#" className="navItems" id="download-btn">DOWNLOAD</a>
                <button id="navMenu" onClick={handleClick}>
                <MenuIcon className="navMenu" />
                </button>
            </nav>      
            <div className="menuItems" style={isMenu ? {display:"flex"}:{}}>
                  <a href="/#" className="navItems border-items">HOME</a>
                   {links.map(createNavLink)}
                 <a href="/#" className="navItems" onMouseOver={handlMouseOver} onMouseOut={handleMouseOut} style={isHover ? {border: "1px solid white"} : {} }>DOWNLOAD</a>
            </div> 
        </div>
    )
}

export default NavBar
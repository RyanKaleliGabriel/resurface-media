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
    function toggleMenu(){
        setMenu(!isMenu)
    }

    

    return(
        <div>
        <div className="navContainer">
            <nav className="nav">
            <img  className="resurface-logo" src={logo} alt="#"></img>
            <section id="navSection">
                <a href="/#" className="navItems border-items">HOME</a>
                {links.map(createNavLink)}
                <a href="/#" className="navItems " id="download-btn">DOWNLOAD</a>
            </section>    
                <button id="navMenu" onClick={toggleMenu}>
                <MenuIcon className="navMenu" />
                </button>
            </nav>      
        </div>
        { isMenu && ( 
            <div className="menuItems" >
            <a href="/#" className="navItems border-items">HOME</a>
                   {links.map(createNavLink)}
            <a href="/#" className="navItems" onMouseOver={handlMouseOver} onMouseOut={handleMouseOut} style={isHover ? {border: "1px solid white"} : {} }>DOWNLOAD</a>
        </div> 

        )}

        </div>
    )
}
//
export default NavBar
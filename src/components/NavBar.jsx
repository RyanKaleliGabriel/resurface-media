import React, {useState} from "react";
import logo from "../assests/resurface-logo.png"



function NavBar(props){

    const [isHover, setBorder] = useState(false);
    function handleOver(){
        setBorder(true);
    }
    function handleMouseOut(){
        setBorder(false);
    }


    return(
        <div className="navContainer">
            <nav className="nav">
            <img  className="resurface-logo" src={logo} alt="#"></img>
                <a href="/#" className="navItems border-items">HOME</a>
                <a href="/#" onMouseOut={handleMouseOut} onMouseOver={handleOver} style={isHover ? {border: "1px solid white"}: {}} className="navItems">FEATURE</a>
                <a href="/#" onMouseOut={handleMouseOut} onMouseOver={handleOver} style={isHover ? {border: "1px solid white"}: {}} className="navItems">OUR THEME</a>
                <a href="/#" onMouseOut={handleMouseOut} onMouseOver={handleOver} style={isHover ? {border: "1px solid white"}: {}} className="navItems">PRICING</a>
                <a href="/#" onMouseOut={handleMouseOut} onMouseOver={handleOver} style={isHover ? {border: "1px solid white"}: {}} className="navItems">CONTACT US</a>
                <a href="/#" onMouseOut={handleMouseOut} onMouseOver={handleOver} style={isHover ? {border: "1px solid white"}: {}} className="navItems" id="download-btn">DOWNLOAD</a>
            </nav>
            <hr style={{color:"green"}}/>
        </div>
    )
}

export default NavBar
import React from "react";
import logo from "../assets/logo (1).png"
import{BsMouse} from "react-icons/bs"

function Misc(){  
    return <>
    <a  href="/" className="logo">
        <img src={logo} alt="logo"/>
    </a>
    <a  href="/franchise" className="franchiseBtn">
       GET A FRANCHISE
    </a>
    <BsMouse className="scrollBtn"/>
    </>
}

export default Misc
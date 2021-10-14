import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const Title="My Gallery";
  const [title, setTitle] = useState(Title);

 return(
    <>
       <NavLink className="home" to="/" onClick={()=>{setTitle(()=>{document.title="Home"})}}>Home</NavLink>
       <NavLink className="about" to="/about" onClick={()=>{setTitle(()=>{document.title="About Us"})}}>About Us</NavLink>
       <NavLink className="contact" to="/contact" onClick={()=>{setTitle(()=>{document.title="Contact Us"})}}>Contact Us</NavLink>
       <NavLink className="privacy" to="/privacy_policy" onClick={()=>{setTitle(()=>{document.title="Privacy Policy"})}}>Privacy Policy</NavLink>
       <NavLink className="term" to="/terms&conditions" onClick={()=>{setTitle(()=>{document.title="Terms & Conditions"})}}>Terms & Conditions</NavLink>
    </>
 );
}
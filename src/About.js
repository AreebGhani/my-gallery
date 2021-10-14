import React from "react";
import Footer from "./Footer";
import OffcanvasNavBar from "./OffcanvasNavBar";
import { Link } from "react-router-dom";

export default function About() {

 return(
 <>
     <OffcanvasNavBar/> 
    <h1 style={{textDecoration:"underline",textAlign:"center", color:"black", marginTop:"10px"}}>About Us</h1>
    <h5 style={{textAlign:"center", color:"green", marginTop:"50px"}}>"My Gallery" is a free image downloading website.</h5>
    <div style={{margin:"50px", fontWeight:"500", color:"red", textAlign:"center"}}>
      <p>Hello Friends Welcome To MY GALLERY.</p>
      <p>MY GALLERY is a Professional Free Image Source Platform.</p>
      <p>Here we will provide you only interesting content, which you will like very much.</p>
      <p>We're dedicated to providing you the best of Free Image Source, with a focus on dependability and 1000+ Free Images.</p>
      <p>We working to turn our passion for Free Image Source into a booming online website.</p>
      <p>We hope you enjoy our Free Image Source as much as we enjoy offering them to you.</p>
      <p>I will keep posting more important posts on my Website for all of you.</p>
    </div>
    <h6 style={{textAlign:"center", color:"black", marginTop:"50px"}}>Please give your support and love.</h6>
    <h6 style={{textAlign:"center", color:"black", marginTop:"50px"}}>"Thanks For Visiting Our Site"</h6>
    <h5 style={{textAlign:"center", marginTop:"50px", marginBottom:"100px"}}><Link to="/contact" >Contact Us...!!</Link></h5>
    <br/>
    <br/>
    <Footer/>
    <br/>
 </>);
}
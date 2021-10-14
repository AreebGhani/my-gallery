import React from "react";
import Footer from "./Footer";
import OffcanvasNavBar from "./OffcanvasNavBar";

export default function ErrorPage() {
 return(
 <>
    <OffcanvasNavBar/> 
    <h1 style={{textDecoration:"underline",textAlign:"center", color:"black", marginTop:"10px"}}>OOps! Page not found...!!</h1> 
    <br/>
    <br/>
    <div style={{marginBottom:"200px"}}></div>
    <Footer/>
    <br/>
 </>);
}
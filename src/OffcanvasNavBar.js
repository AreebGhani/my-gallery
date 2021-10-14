import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

export default function OffcanvasNavBar(){
return(
 <>
 <nav className="navbar navbar-expand navbar-light" style={{alignItems:"center", backgroundColor:"rgb(143, 143, 143)"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h1 className="h1"> My Gallery </h1></a>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li>
          <div className="home"><a className="nav-link active" aria-current="page" href="/">Home</a></div>
        </li>
        <li>
          <div className="about"><a className="nav-link" href="/about">About Us</a></div>
        </li>
        <li>
          <div className="contact"><a className="nav-link" href="/contact">Contact Us</a></div>
        </li>
        <li>
          <div className="privacy"><a className="nav-link" href="/privacy_policy">Privacy Policy</a></div>
        </li>
        <li>
          <div className="term"><a className="nav-link" href="/terms&conditions">Terms & Conditions</a></div>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </>
);
}
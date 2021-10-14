import React from "react";
import { NavLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '} {new Date().getFullYear()} <span/>
        <NavLink style={{color:"inherit",}} to="/">
          " MY GALLERY "
        </NavLink> .All Right Reserved.
      </Typography>

    //let d = new Date();
    //d = d.getFullYear();

        //<br></br>
        //<br></br>
       //<br></br>
       //<div className="footer">
       //<h5>Copyright Ⓒ {d} <a href="http://localhost:3000/">"My Gallery"</a> . All Right Reserved</h5>
       //</div>

    );    
}

export default Footer;
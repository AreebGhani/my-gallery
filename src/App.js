import React from "react";
import Clock from "./Clock";
import Footer from "./Footer";
import "./index.css";
import Pic from "./Pic";
import Picdata from "./Picdata"


function App() {
    return(
        <>
           <h1 className="h1" >"My Gallery"</h1>   
                {Picdata.map((props) => 
                   <Pic 
                      key={props.id}
                      title={props.title}
                      category={props.category} 
                      imgsrc={props.imgsrc} 
                      link={props.link}
                      rel={props.rel} /> )
                }
              <br></br>
              <hr></hr>

              <Clock/>
              

              <Footer/>
       </>
    );
}

export default App;
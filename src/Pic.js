import React from "react";

function Pic(props) {
    
    return(
        <div className="pics" >
          <div className="pic">
               <h3 className="pic_title">{props.title}</h3>
               <img src={props.imgsrc} alt="error_" className="pic_img" />
                   <div className="pic_info">
                       <span className="pic_category">{props.category}</span>
                       <a href={props.link} target="_blank"> <button>Download</button> </a>
                    </div>
          </div>
        </div>
    );
}

export default Pic;
import React, { useState } from "react";
import "./index.css"

   const Clock = () => {
  
   const time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => { setCtime(time); };

    setTimeout(UpdateTime,1000);

    return(
        <>    
            <div className="clock" >
                 <h1 className="clock_h"> {ctime} </h1>
            </div>
        </>
    );
}
export default Clock;
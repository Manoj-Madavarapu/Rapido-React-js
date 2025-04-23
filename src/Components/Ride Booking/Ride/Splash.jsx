import React from "react";
import "./splash.css"
let Splash=()=>{
    return(
        <>
        <div className="splash-container">
            <div className="splash-logo">
                <img src="https://logowik.com/content/uploads/images/rapido-bike-taxi8263.jpg" alt="" style={{width:"50%",background:"black"}}/>
            </div>
            <h1  className="splash-version">2.O</h1>
            <h1 className="splash-tagline">Now from Anywhere to Everywhere !</h1>
        </div>
        </>
    )
}
export default Splash;
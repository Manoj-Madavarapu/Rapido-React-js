import React from "react";
import "./ridefooter.css"
import { useNavigate } from "react-router-dom";
let RideFooter=()=>{
    let navigate=useNavigate();
    return(
        <>
        <div className="ride_footer">
          <div>
             <i class="fa-solid fa-house" onClick={()=>navigate("/")}></i>
             <p>Home</p>
          </div>
          <div>
          <i class="fa-brands fa-accusoft" onClick={()=>navigate("/about")}></i>
            <p>About</p>
          </div>
          <div>
            <i class="fa-solid fa-business-time" onClick={()=>navigate("/carrer")}></i>
            <p>Carrer</p>
          </div>
          <div>
          <i class="fa-solid fa-shield-halved" onClick={()=>navigate("/safety")}></i>
          <p>Safety</p>
          </div>
          <div>
          <i class="fa-solid fa-blog" onClick={()=>navigate("/blog")}></i>
          <p>Blog</p>
          </div>
          <div>
          <i class="fa-solid fa-phone" onClick={()=>navigate("/contact")}></i>
          <p>Contact</p>
          </div>
        </div>
        </>
    )
}
export default RideFooter;
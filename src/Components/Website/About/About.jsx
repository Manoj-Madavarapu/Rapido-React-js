import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./about.css"
import { useNavigate } from "react-router-dom";
let About=()=>{
    let navigate=useNavigate()
    return(
        <>
        <Nav/>
        <div className="know_us_better about">
            <div className="know_content about-content">
                <h1>India’s Beloved</h1>
                <h1 className="black">Bike Taxi Service</h1>
                <h2>We are not an option, we are a choice</h2>
                <p>We're #1 choice of 10 Million people because we're the solution of India's intra-city commuting problems. With assured safety, we also provide economically priced rides.</p>
                <h2>What makes us different?</h2>
                <p>Our bike taxis can dodge the traffic during peak hours and get you to the destination in a jiffy! So when you think travel, think Rapido.</p>
            </div>
            <div className="know_image about_image" >
                <div className="div1"><img src="/assets/about_us_1.png" alt="" id="girl_img"/></div>
                <div id="div2"></div>
                <div id="div3"></div>
                <div className="div4"><img src="/assets/about_us_2.png" alt="" id="boy_img" /></div>
            </div>
        </div>

        <div className="champions">
           <div className="champ_content">
           <h1>Champions of our success story
            </h1>
            <p>Rapido has come a long way ever since its inception in 2015. With a lot of hardwork and perseverance we have made a place for ourselves in the market. As a brand and as a service, it is our constant endeavour to redefine ourselves.</p>
           </div>
           <div className="champ_img">
              <img src="/assets/Screenshot 2025-02-01 210118.png" alt="" />
           </div>
        </div>

        <div className="work">
             <h1>Jobs @ Rapido</h1>
             <p>Join us in exploring a world of endless opportunities. Let’s find a spot for you.</p>
             <button onClick={()=>navigate("/carrer")}>Work with us</button>
        </div>
        <Footer/>
        </>
    )
}
export default About;
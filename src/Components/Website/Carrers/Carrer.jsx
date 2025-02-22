import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./carrer.css"
import Slide from "./Slide";
let Carrer=()=>{
    
    return(
        <>
        <Nav/>
        <div className="know_us_better about carrer" style={{width:"96.7%"}}>
            <div className="know_content about-content" style={{width:"35%"}}>
                <h1 className="black">Be a part of our team.</h1>
                <p style={{width:"85%",marginTop:"20px"}}>We are so glad you want to join us in exploring a world of endless opportunities at Rapido. Let’s find a spot for you.</p>
                <button onClick={()=>window.open("https://rapido.darwinbox.in/ms/candidate/careers")}>View jobs</button>
            </div>
            <div className="know_image about_image">
                <div className="div1"><img src="/assets/career_home_1.png" alt="" /></div>
                <div id="div2"></div>
                <div id="div3"></div>
                <div className="div4"><img src="/assets/career_home_2.png" alt="" /></div>
            </div>
        </div>
        <Slide/>
        <Footer/>
        </>
    )
}
export default Carrer;
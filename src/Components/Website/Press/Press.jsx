import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import pressData from "./pressData";
import "./press.css"
let Press=()=>{
    return(
        <>
        <Nav/>
        <h1 className="press_heading">Press and Media</h1>
        <div className="press_conatiner">
        {pressData.map((x)=>{
            return(
              <div className="press" key={x.id}>
                 <img src={x.image} alt="" />
                 <p>{x.description}</p>
              </div>
            )
        })}
        </div>
        <Footer/>
        </>
    )
}
export default Press;
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RideFooter from "../BottomFooter/RideFooter";
import "./captainSearching.css"
let CaptainSearching=()=>{
    let [captainDetails,setCapatainDetails]=useState(false);
    let [time,setTime]=useState(125);
    let [arrived,setArrived]=useState(false)
    let location=useLocation();
    let vehicleDetails=location.state;
    let formatTime=(sec)=>{
        let min=Math.floor(sec/60)
        let seconds=sec%60;
        return `${("0"+min).slice(-2)}:${("0"+seconds).slice(-2)}`;
    }
    useEffect(()=>{
        setTimeout(()=>{
            setCapatainDetails(true);
        },5000);
        setInterval(()=> {
            setTime((prevTime)=>(prevTime>0 ? prevTime - 1 : 0));
          }, 1000);
    },[]);
    useEffect(()=>{
        if(time===0){
            setArrived(true);
        }
        else{
            setArrived(false)
        }
    },[time])
    return(
        <>
        <div className="captain_search">
          <div className="rapido_add">
            <img src="/assets/unnamed.webp" alt="" />
            {/* <img src="https://play-lh.googleusercontent.com/qKjMCIEUJRc_p_GlvEMbSgAJKWnvhGuCFE1ut0YbpWdqoUjyAfTmWDmASX1bkh3QHl8=w5120-h2880-rw" alt="" /> */}
          </div>
          <div className="captain_details">
            {!captainDetails?
            <>
            <h2>Looking for the best rider...</h2>
            <div className="loading_bar"></div>
            </>
            :
            <>
            <h2 style={{textAlign:"center",marginTop:"50px",marginBottom:"20px"}} className="heading2">Captain Details</h2>
            <div className="captain_profile">
                <img src="/assets/Captain Iamge2.jpg" alt="" />
                <div className="main">
                    <h3>M.Manoj Naidu</h3>
                    <h4><i class="fa-solid fa-phone"></i>  &nbsp;9392710904</h4>
                    <p><b>Rating : </b><span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span></p>
                    <p style={{marginTop:"15px"}}>{vehicleDetails.type} no: TS 0473</p>
                    <p><b>Droping Time:</b> {vehicleDetails.drop}</p>
                    <p style={{marginTop:"5px"}}><b>Price:</b> ₹<span style={{fontSize:"18px"}}> {vehicleDetails.price}</span></p>
                </div>
            </div>
            <div className="captain_arrival">
                 {!arrived?
                 <><p>The captain is on the way!</p>
                   <p>He will be arriving in <span className="time_display">{formatTime(time)}</span> {time>60?"min":"Sec"}</p>
                 </>:
                 <><p style={{marginTop:"60px"}}>The Captain has arrived!</p>
                 <p>Enjoy the Journey!</p>
                 <h1 style={{marginTop:"30px"}}>Thanks for Choosing Rapido !</h1></>
                 }
            </div>
            </>
             }
          </div>
        </div>
        {captainDetails&&<RideFooter/>}
        </>
    )
}
export default CaptainSearching;

import React, { useEffect, useState } from "react";
import "./vehicle.css";
import { useNavigate } from "react-router-dom";
let Vehicle=({distance,setIconData})=>{
    let [bike,setBike]=useState(false);
    let [auto,setAuto]=useState(false);
    let [car,setCar]=useState(false);
    let [bikePrice,setBikePrice]=useState("");
    let [autoPrice,setAutoPrice]=useState("");
    let [carPrice,setCarPrice]=useState("");
    let [upgrade,setupgarde]=useState(false);
    let [bikeDropTime, setBikeDropTime] = useState("");
    let [autoDropTime, setAutoDropTime] = useState("");
    let [carDropTime, setCarDropTime] = useState("");
    let [selectedVehicle,setSelectedVehicle]=useState(null);
    let [coupon,setCoupon]=useState(false);
    let [cashback,setCashback]=useState(false);
    let [offer,setOffer]=useState(false);
    let [OriginalBikeAmount,setOriginalbikeAmount]=useState("")
    let [OriginalAutoAmount,setOriginalAutoAmount]=useState("")
    let [OriginalCarAmount,setOriginalCarAmount]=useState("")
    // console.log(distance);
   useEffect(()=>{
    if(!distance) return;
    setupgarde(distance>100 ? true : false );
    let bikeAmount=Math.ceil(distance*8);
    if(bikeAmount<15){
       setBikePrice(15);
       setOriginalbikeAmount("");
    }
    else{
        if(offer){
            let applyOffer= Math.round(bikeAmount-(bikeAmount*(20/100)));
            console.log("Origial price is:",bikeAmount)
            console.log("Discount Applied:", bikeAmount *(20/100));
            console.log("Final Price After Discount:", applyOffer);
            setBikePrice(applyOffer);
            // alert("Coupon have been applied")
            setOriginalbikeAmount(bikeAmount);
        }
        else{
          setBikePrice(bikeAmount);
        }
    }
    let autoAmount=Math.ceil(distance*15);
    if(autoAmount<30){
        setAutoPrice(30);
        setOriginalAutoAmount("");
    }
    else{
        if(offer){
            let applyOffer= Math.round(autoAmount-(autoAmount*(20/100)))
            setAutoPrice(applyOffer);
            setOriginalAutoAmount(autoAmount);
        }
        else{
        setAutoPrice(autoAmount);
        }
    }
    let carAmount=Math.ceil(distance*20)
    if(carAmount<43){
        setCarPrice(43);
        setOriginalCarAmount("");
    }
    else{
        if(offer){
            let applyOffer= Math.round(carAmount-(carAmount*(20/100)))
            setCarPrice(applyOffer);
            setOriginalCarAmount(carAmount);
        }
        else{
        setCarPrice(carAmount);
        }
    }

     // Drop Time Calculation
    let calculateDropTime = (speed) => {
        let travelTime = Math.max((distance / speed)*60 , 5) // Convert to minutes
        let currentTime = new Date();
        currentTime.setMinutes(currentTime.getMinutes() + travelTime);
        return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true  });
    }
    setBikeDropTime(calculateDropTime(50));
    setAutoDropTime(calculateDropTime(35)); 
    setCarDropTime(calculateDropTime(distance>100?65:40));
   },[distance,offer]);

   useEffect(()=>{
       setOffer(false);
   },[distance]);
   
    // for getting selected vehicle data
    let selected=(type,drop,price)=>{
        setSelectedVehicle({type,drop,price});
        setIconData({type})
    }
    let handleBooking = () => {
        if (selectedVehicle) {
            navigate("/captainSearching",{state:selectedVehicle});
        }
    };

    //for coupons and cashback
    let handleCoupons=()=>{
        coupon?setCoupon(false):setCoupon(true);
    } 
    let handleCashback=()=>{
        cashback?setCashback(false):setCashback(true);
    };
    let handleOffer=()=>{
        offer?setOffer(false):setOffer(true);
        // console.log("Offer applied");
    }
    let navigate=useNavigate()
    return(
        <>
        <div className="vehicle_booking">
        <div className="vehicle_container">
             {!upgrade ?
             <>
             <div className={bike?"zoom":"vehicles"} onClick={()=>{setBike(true);setAuto(false);setCar(false);selected("Bike",bikeDropTime,bikePrice)}}>
                <img src="/assets/Bike.webp" alt="" />
                <div className="vehicle_content">
                    <h4>Bike <i className="fa-solid fa-user"> &nbsp;1</i> </h4>
                    <div className="fast">Fastest</div>
                    <p>2 min away </p>
                    <p>Drop {bikeDropTime}</p>
                </div>
                <div className="price">
                   {(offer && OriginalBikeAmount) &&<h4 style={{marginBottom:"10px",color:"gray",textAlign:"center"}}> ₹  <del>{OriginalBikeAmount}</del><p className="strike">Coupon Aplied</p></h4>}
                    <h4>₹ {bikePrice}</h4>
                </div>
             </div>
             <div className={auto?"zoom":"vehicles"} onClick={()=>{setAuto(true);setBike(false);setCar(false);selected("Auto",autoDropTime,autoPrice)}}>
                <img src="/assets/Auto.webp" alt="" />
                <div className="vehicle_content">
                    <h4>Auto <i className="fa-solid fa-user"> &nbsp;3</i></h4>
                    <p>2 min away</p>
                    <p>Drop {autoDropTime}</p>
                </div>
                <div className="price">
                    {(offer && OriginalAutoAmount) &&<h4 style={{marginBottom:"10px",color:"gray"}}>₹  <del>{OriginalAutoAmount}</del><p className="strike">Coupon Aplied</p></h4>}
                    <h4>₹ {autoPrice}</h4>
                </div>
             </div>
             <div className={car?"zoom":"vehicles"} style={{border:"none"}} onClick={()=>{setCar(true);setBike(false);setAuto(false);selected("Car",carDropTime,carPrice)}}>
                <img src="/assets/Cab.webp" alt="" />
                <div className="vehicle_content">
                    <h4>Car <i className="fa-solid fa-user"> &nbsp;4</i></h4>
                    <p>2 min away </p>
                    <p>Drop {carDropTime}</p>
                </div>
                <div className="price">
                    {(offer && OriginalCarAmount) &&<h4 style={{marginBottom:"10px",color:"gray"}}>₹  <del>{OriginalCarAmount}</del><p className="strike">Coupon Aplied</p></h4>}
                    <h4>₹ {carPrice}</h4>
                </div>
             </div>
             </>:
             <>
             <div className={bike?"zoom":"vehicles"} id="upgrade" onClick={()=>{setBike(true);setAuto(false);setCar(false);selected("Bike",bikeDropTime,bikePrice)}}>
                <img src="/assets/pngwing.com (7).png" alt="" />
                <div className="vehicle_content">
                    <h4>Bike <i className="fa-solid fa-user"> &nbsp;1</i> </h4>
                    <p>8 min away </p>
                    <p>Drop {bikeDropTime}</p>
                </div>
                <div className="price">
                {(offer && OriginalBikeAmount) &&<h4 style={{marginBottom:"10px",color:"gray",textAlign:"center"}}> ₹  <del>{OriginalBikeAmount}</del><p className="strike">Coupon Aplied</p></h4>}
                    <h4>₹ {bikePrice}</h4>
                </div>
             </div>
             <div  className={car?"zoom":"vehicles"} id="upgrade" style={{border:"none"}} onClick={()=>{setCar(true);setBike(false);setAuto(false);selected("Car",carDropTime,carPrice)}}>
                <img src="/assets/pngwing.com (8).png" alt="" style={{width:"150px",height:"140px"}}/>
                <div className="vehicle_content">
                    <h4>Car <i className="fa-solid fa-user"> &nbsp;4</i></h4>
                    <div className="fast">Fastest</div>
                    <p>10 min away</p>
                    <p>Drop {carDropTime}</p>
                </div>
                <div className="price">
                {(offer && OriginalCarAmount) &&<h4 style={{marginBottom:"10px",color:"gray"}}>₹  <del>{OriginalCarAmount}</del><p className="strike">Coupon Aplied</p></h4>}
                    <h4>₹ {carPrice}</h4>
                </div>
             </div>
             </>}
        </div>
        <div className="ride-booking">
        <div className="coupon-section co" onClick={handleCashback}>
           <i className="fa-solid fa-sack-dollar"></i>
            <h2>Cashbacks</h2>
            {cashback&&<div className="coupons_list" style={{width:"290px",textAlign:"center",bottom:"60px",left:"-8px",padding:"28px 15px 35px 15px"}}>
                <i className="fa-regular fa-face-surprise"></i>
                <i className="fa-regular fa-face-surprise"></i>
                <h4 style={{marginTop:"10px"}}>Sorry you don't have any cashbacks !</h4>
            </div>            
            }
          </div>
          <button className="book-ride-btn" onClick={handleBooking}>
                Book a Ride
          </button>
          <div className="coupon-section" onClick={handleCoupons}>
            <i className="fa-solid fa-tags"></i>
            <h2>Coupons</h2>
            {coupon&&
            <div className="coupons_list">
                <h2>Coupons</h2>
                <div className="active_coupon">
                      <div className="active_coupon_cont">
                          <h4>Coupon code: CMVM20 </h4>
                          <p style={{marginTop:"10px"}}>You will getting 20% offer on the price.</p>
                          <p>! Rules and regulations are applied  !</p>
                      </div>
                      <div>
                        <button onClick={handleOffer} disabled={bikePrice<40||autoPrice<60||carPrice<100}>{(bikePrice<40||autoPrice<60||carPrice<100)?"Not Applicable":((offer)?"Remove":"Apply")}</button>
                      </div>
                </div>
            </div>            
            }
          </div>
        </div>
        </div>
        </>
    )
}
export default Vehicle;
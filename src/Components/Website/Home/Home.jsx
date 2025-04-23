import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Navbar/Nav";
import "./home.css"
import CarouselOwn from "../Carousel/CarouselOwn";
import Footer from "../Footer/Footer"
import Modal from "react-modal";
let Home=()=>{
    let [customer,setcustomer]=useState(true);
    let [signUp,setSignUp]=useState(false);
    let [name, setname] = useState("");
    let [city, setcity] = useState("");
    let [license,setLicense]=useState("");
    let [phone, setphone] = useState("");
    let [otp, setotp] = useState("");
    let [generatedOtp,setgeneratedOtp]=useState("");
    let [submit,setSubmit]=useState(false);
    let navigate=useNavigate();

    let storedName=localStorage.getItem("Name");
    let login=localStorage.getItem("Login");

  function validate(){
      if(!name.trim()){
         return alert("Please Enter Your Name");
      }
      else if(!city.trim()){
          return alert("Please Enter Your City");
      }
      else if(license==""){
        return alert("Do You have License");
    }
      else if(!phone.trim()){
          return alert("Please Enter Your Phone number");
      }
      else if(phone.length!==10 || !/^[6-9]\d{9}$/.test(phone)){
          return alert("Invalid Phone Number");
      }
      else if(!otp.trim()){
        return alert("Otp is required")
      }
      else if(otp.trim()!==generatedOtp.toString()){
        return alert("Invalid Otp");
      }
      setSubmit(true);
  }
  // let generatedOtp;
  function generateOtp(){
    let x=Math.floor((Math.random()*9000)+1000);
    // console.log(x);
    setgeneratedOtp(x);
    alert("Otp has sent");
    setTimeout(()=>{
      console.log(x);
      alert(`Your OTP is : ${x}`);
    },1000);
    // console.log(generatedOtp);
  }
  function done(){
    if(submit){
      setSubmit(false);
      setSignUp(false);
      setname("");
      setLicense("");
      setcity("");
      setphone("");
      setotp("");
      setgeneratedOtp("")
    }
  }

  function navigating(){
    if(storedName){
     navigate("/ride")
    }
    else{
     navigate("/login")
    }
   }
   
  return(
        <>
        <Nav/>
        <div className="home" >
            <div className="home_content">
                <h1>Bharat moves on
                Rapido!</h1>
                <p>Rapido, with Bike-Taxis, Autos & Cabs is revolutionising the way India travels. With a presence in 150+ cities and over 100 million safe rides completed, Rapido is becoming India’s go-to app for comfortable and affordable rides.</p>
                <button id="ride" onClick={navigating} className="ride_button"><i class="fa-solid fa-motorcycle bike_icon"></i>Book a Ride</button>
                <button id="driver" onClick={()=>setSignUp(true)}>Sign-up as Driver</button>
            </div>
            <div className="home_image">
                <img src="assets/REV_Web_Main_Banner.webp" alt="" />
            </div>
        </div>

        <Modal
        isOpen={signUp}
        // onRequestClose={()=>setSignUp(false)}
        ariaHideApp={false}
        style={{content:{width:"28%",height:"69%",margin:"auto",marginTop:"60px",zIndex:"100",boxShadow:"0px 0px 15px rgb(0,0,0,0.5)",borderRadius:"10px",padding:"40px"},overlay:{zIndex:"100",backgroundColor:"#a49c9c3e"}}}
        contentLabel="Example Modal" className="signUpModal">
          {!submit?<>
            <div className="sign">
                <h1>Become a Captain <span onClick={()=>setSignUp(false)}>&times;</span></h1>
                <input type="text" placeholder="Enter Full Name" onChange={(e)=>setname(e.target.value)}/>
                <input type="text" placeholder="Enter City" onChange={(e)=>setcity(e.target.value)}/>
                <p>Do you have a valid Driving License?</p>
                <div className="radio">
                  <input type="radio" name="same" value="yes" onChange={(e)=>setLicense(e.target.value)}/><span>Yes</span>
                  <input type="radio" name="same" value="no" onChange={(e)=>setLicense(e.target.value)}/><span>No</span>
                </div>
                <input type="tel" placeholder="Ener Phone number" style={{width:"58%"}} onChange={(e)=>setphone(e.target.value)}/>
                <button className="otp" onClick={generateOtp} disabled={!(phone.length === 10 && /^[6-9]\d{9}$/.test(phone)) } id={(phone.length==10 &&  /^[6-9]\d{9}$/.test(phone))? "o_active":""}>Get OTP</button>
                {generatedOtp && <><input type="text" placeholder="Enter OTP" onChange={(e)=>setotp(e.target.value)}/><br/></>}
                <button className="submit" onClick={validate} id={name.trim() && phone.trim() && city.trim() && otp.length==4 ? "active":""}>Submit</button>
            </div>
          </>:
            <div className="SignUp_thanks thanks">
                 {license=="yes"?<>
                  <img src="/assets/Screenshot 2025-02-03 035707.png" alt="" />
                  <h1 style={{fontSize:"25px"}}>Welcome To Rapido Family <br/>{name}</h1>
                  <button onClick={done} style={{marginTop:"10px"}}>Done</button>
                 </>:
                 <div style={{marginTop:"180px"}} className="thanks">
                    <h1>Driving License is Requried</h1>
                    <p>to enroll as a captain</p>
                    <button onClick={done}>Okk</button>
                 </div>
                 }
            </div>
          }
        </Modal>

        <div className="safety">
            <img src="assets/safety_guideline.png" alt="" onClick={()=>navigate("/safety")}/>
        </div>
        <div className="know_us_better">
            <div className="know_image">
                <div className="div1"><img src="/assets/who_we_1.webp" alt="" /></div>
                <div id="div2"></div>
                <div id="div3"></div>
                <div className="div4"><img src="/assets/who_we_2.webp" alt="" /></div>
            </div>
            <div className="know_content">
                <h1>Know us better</h1>
                <p>In 2017, Rapido started out by pioneering the concept of Bike-Taxi for India and today dominates the market with a staggering 70% market share. With a vision to empower India to move, we have been taking significant strides. Today we are a name to reckon with, in app based auto services and are making a strong foothold in the Cab market and intra-city delivery with Rapido Parcel.</p>
                <button onClick={()=>navigate("/about")}>Read more here</button>
            </div>
        </div>
            <div className="our_impact">
                <h1>Our Impact</h1>
                <p>Our presence in the country has changed the concept of intra-city travel and made last-mile connectivity affordable for all.</p>
                <div className="impact-list">
                  <ul>
                    <li>
                      <div className="circle">
                        <img src="assets/presence_1.webp" alt="Downloads" />
                        <p className="bold">25M</p>
                        <p>Downloads</p>
                      </div>
                    </li>
                    <li>
                      <div className="circle">
                        <img src="assets/presence_2.webp" alt="Cities" />
                        <p className="bold">100+</p>
                        <p>Cities</p>
                      </div>
                    </li>
                    <li>
                      <div className="circle">
                        <img src="assets/presence_3.webp" alt="Captains" />
                        <p className="bold">1+M</p>
                        <p>Captains</p>
                      </div>
                    </li>
                    <li>
                      <div className="circle">
                        <img src="assets/presence_4.webp" alt="Customers" />
                        <p className="bold">10M+</p>
                        <p>Customers</p>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="what">
                <h1>What's in it for you</h1>
                <button onClick={()=>setcustomer(true)}  id={customer ? "active" : ""} className=" button customer">Customers</button>
                <button  onClick={()=>setcustomer(false)}  id={!customer ? "active" : ""} className=" button captain">Captains</button>
                <div className="what_images">
                    {customer?(
                    <>
                    <div><img src="assets/Bike.webp" alt="" /><h3>India’s largest Bike-Taxi</h3><p>Cut through traffic, reach on time and save money. With Rapido Bike-Taxis, it’s that simple.</p></div>
                    <div><img src="assets/Auto.webp" alt="" /><h3>5-minute Auto
                    </h3><p>Never wait for an auto ride again! Get a Rapido Auto within just 5 minutes! Anytime. Anywhere.</p></div>
                    <div><img src="assets/Cab.webp" alt="" /><h3>Lowest Priced Cabs</h3><p>More wheels. More comfort. And lower price than any other cab out there.</p></div>
                    </>):
                    (<div className="what_captain"><img src="assets/Screenshot 2025-01-23 014709.png" alt="" /></div>)}
                </div>
            </div>
            
            <CarouselOwn/>
            <Footer/>
        </>
    )
}
export default Home;



// The .test() method is used with regular expressions (RegExp) in JavaScript to check if a string matches a specific pattern. It returns true if there's a match and false otherwise.
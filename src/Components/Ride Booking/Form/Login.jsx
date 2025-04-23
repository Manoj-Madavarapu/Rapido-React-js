import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Img from "./Img";
import Nav from "../../Website/Navbar/Nav"; 
import "./login.css"
let Login=()=>{
    let [name, setname] = useState("");
    let [nameError,setNameError]=useState(false)
    let [phone, setphone] = useState("");
    let [phoneError,setPhoneError]=useState(false);
    let [otp, setotp] = useState("");
    let [generatedOtp,setgeneratedOtp]=useState("");
    let [go,setGo]=useState(false);
    let navigate=useNavigate();
    useEffect(()=>{
      if(!name.trim()){
        return setNameError(true);
      }
      else{
        setNameError(false);
      }
      if(!phone.trim()){
        return setPhoneError(true);
      }
      else{
        setPhoneError(false);
        setGo(true);
      }
},[name,phone]);
  function validate(){
      let storedName = localStorage.getItem("Name");
      let storedPhone = localStorage.getItem("Phone Number");
      console.log(storedName,storedPhone);
      if(go){
        if("go" && phone.length!==10 || !/^[6-9]\d{9}$/.test(phone)){
          return alert("Invalid Phone Number");
      }
      else if(!storedPhone){
        return alert("Details not found please register first");
      }
      else if(phone!=storedPhone){
        return alert("Invalid Credentials");
      }
      else if(!otp.trim()){
        return alert("Otp is required")
      }
      else if(otp.trim()!==generatedOtp.toString()){
        return alert("Invalid Otp");
      }
      localStorage.setItem("Logout",false);
      localStorage.setItem("Login",true)
      navigate("/ride");
      }
  }

  function generateOtp(){
    let x=Math.floor((Math.random()*9000)+1000);
    setgeneratedOtp(x);
    alert(`Otp has sent
Note: This is a demo OTP and will not be sent to your phone`);
    setTimeout(()=>{
      console.log(x);
      alert(`Your OTP is : ${x}
Note: Remember this OTP for login or check in console`);
    },1000);
  }
    return(
        <>
        <div className="login_form">
        <div className="sign login">
           <Img/>
           <div className="login_cont">
               <h1>Let's get started</h1>
               <input type="text" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)}/>
               {nameError && <p id="error">*This field is requried</p>}
               <input type="tel" placeholder="Enter Your Phone number" style={{width:"41%"}} onChange={(e)=>setphone(e.target.value)}/>
               <button className="otp" onClick={generateOtp} disabled={!(phone.length === 10 && /^[6-9]\d{9}$/.test(phone)) } id={(phone.length==10 &&  /^[6-9]\d{9}$/.test(phone))? "o_active":""}>Get OTP</button>
               {phoneError && <p id="error">*This field is requried</p>}
               {generatedOtp && <><input type="text" placeholder="Enter OTP" onChange={(e)=>setotp(e.target.value)}/><br/></>}
               <button className="submit" onClick={validate} id={name.trim() && phone.trim() && otp.length==4 ? "active":""}>Proceed</button>
               <p className="dont">Don't have an account? <a href="/register">Register</a></p>
            </div>
          </div>
        </div>
        </>
    )
}
export default Login;
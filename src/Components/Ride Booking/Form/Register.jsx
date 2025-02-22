import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Img from "./Img";
import "./login.css"
let Register=()=>{
    let [name, setname] = useState("");
    let [nameError,setNameError]=useState(false);
    let [gender,setGender]=useState("");
    let [password, setPassword] = useState("");
    let [passwordError,setPasswordError]=useState(false);
    let [phone, setphone] = useState("");
    let [phoneError,setPhoneError]=useState(false);
    let [otp, setotp] = useState("");
    let [generatedOtp,setgeneratedOtp]=useState("");
    let navigate=useNavigate();
  function validate(){
    if(!name.trim()){
         return alert("Please Enter Your Name");
    }
    else if(!password.trim()){
        return alert("passsword is requried");
    }
    if(password.length<4){
       return alert("Password should contain minimum five characters")
    }
    else if(gender==""){
      return  alert("Please select your Gender")
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
      localStorage.setItem("Name",name);
      localStorage.setItem("Password",password);
      localStorage.setItem("Phone Number",phone);
    if(nameError && passwordError && phoneError ){
      return alert("All requried fields need to be filled");
    }
    navigate("/login");

  }

  function generateOtp(){
    let x=Math.floor((Math.random()*9000)+1000);
    setgeneratedOtp(x);
    alert("Otp has sent");
    setTimeout(()=>{
      console.log(x);
      alert(`Your OTP is : ${x}`);
    },1000);
  }
    return(
        <>
        <div className="sign login login_form register">
            <div className="login_cont register_cont">
                <img src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2023/12/Rapido-cab.jpg"/>
                <h1>Rapido 2.O Registration form</h1>
               <input type="text" placeholder="Enter Full Name" onChange={(e)=>setname(e.target.value)} required/>
                {/* {nameError && <p style={{color:"red"}}>*This field is required</p>} */}
                <input type="text" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} required/>
                {/* {passwordError && <p style={{color:"red"}}>*This field is required</p>} */}
                <p style={{textAlign:"start",position:"relative",left:"19%",fontSize:"17px",fontWeight:"bold"}}>Select Your Gender</p>
                <div className="radio">
                  <input type="radio" name="same" value="male" onChange={(e)=>setGender(e.target.value)}/><span>Male</span>
                  <input type="radio" name="same" value="female" onChange={(e)=>setGender(e.target.value)}/><span>Female</span>
                  <input type="radio" name="same" value="Others" onChange={(e)=>setGender(e.target.value)}/><span>Others</span>
                </div>
                <input type="tel" placeholder="Ener Phone number" style={{width:"40%",marginTop:"20px"}} onChange={(e)=>setphone(e.target.value)}/>
                {/* {phoneError && <p style={{color:"red"}}>*This field is required</p>} */}
                <button className="otp" onClick={generateOtp} disabled={!(phone.length ==10 && /^[6-9]\d{9}$/.test(phone)) } id={(phone.length==10 &&  /^[6-9]\d{9}$/.test(phone))? "o_active":""}>Get OTP</button>
                {generatedOtp && <><input type="text" placeholder="Enter OTP" onChange={(e)=>setotp(e.target.value)}/><br/></>}
                <button className="submit" onClick={validate} id={name.trim() && phone.trim() && password.trim() && otp.length==4 ? "active":""}>Submit</button>
                <p className="dont">Already have an account  &nbsp;<a href="/login">Login</a></p>
            </div>
        
            </div> 
        </>
    )
}
export default Register;
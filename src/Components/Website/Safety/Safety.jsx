import React,{useState} from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./safety.css"
import { NavLink, useNavigate } from "react-router-dom";
let Safety=()=>{
    let [more,setmore]=useState(false);
    function getMore(){
        if(more){
            return setmore(false)
        }
        else{
            return setmore(true)
        }
    }
    let navigate=useNavigate();
    return(
        <div className="safety_container">
        <Nav/>
        <div className="safety2" id="safe">
            <div className="overview">
                <ul>
                    <li><NavLink to="/safety">Overviews</NavLink></li>
                    <li><NavLink to="/customer">Customers</NavLink></li>
                    <li><NavLink to="/captain">Captains</NavLink></li>
                </ul>
            </div>
            <img src="/assets/safety_guideline.png" alt="" className="safety_all"/>
            <img src="/assets/Safety/covers-everyone.png" alt="" id="covers_img"/>
            <div className="covers">
                <img src="/assets/Safety/cover-customer.png" alt="" onClick={()=>navigate("/customer")}/>
                <img src="/assets/Safety/cover-captain.png" alt="" onClick={()=>navigate("/captain")}/>
            </div>
            <img src="/assets/Safety/safety_groups_overview.png" alt="" style={{width:"60%",height:"680px"}}/>
            <img src="/assets/Safety/safety_way_forward_overview.png" alt="" onClick={getMore} style={{marginBottom:"50px",cursor:"pointer"}}/>
            {more?<img src="/assets/Safety/wayforward-expanded.png" alt="" style={{width:"60%",marginBottom:"100px",marginTop:"-100px"}}/>:""}
        </div>
        <Footer/>
        </div>
    )
}
export default Safety;
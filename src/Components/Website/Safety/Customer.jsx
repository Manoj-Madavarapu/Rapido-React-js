import React,{useState} from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import "./safety.css"
let Customer=()=>{
    let [more,setmore]=useState(false);
        function getMore(){
            if(more){
                setmore(false);
            }
            else{
                setmore(true);
            }
        }
    let navigate=useNavigate()
    return(
        <>
        <Nav/>
        <div className="overview">
            <ul>
                <li><NavLink to="/safety">Overviews</NavLink></li>
                <li><NavLink to="/customer">Customers</NavLink></li>
                <li><NavLink to="/captain">Captains</NavLink></li>
            </ul>
        </div>       
        <div className="s_customer">
            <img src="/assets/Safety/customer-safety.png" alt="" />
            <a href="https://www.rapido.bike/know-your-rapido-captain.pdf" target="_blanck"><img src="/assets/Safety/captain-verification.png" alt="" style={{cursor:"pointer"}}/></a>
            <img src="/assets/Safety/safety-features-customer.png" alt="" />
            <img src="/assets/Safety/safety_way_forward_overview.png" alt="" onClick={getMore} style={{marginBottom:"50px",cursor:"pointer"}}/>
            {more && <img src="/assets/Safety/wayforward-expanded.png" alt="" style={{width:"60%",marginBottom:"100px",marginTop:"-100px"}}/>}
        </div>
        <Footer/>
        </>
    )
}
export default Customer;
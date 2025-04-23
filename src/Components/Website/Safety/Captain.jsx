import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { useNavigate ,NavLink} from "react-router-dom";
import "./safety.css"
let Captain=()=>{
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
        <div className="s_customer s_captain">
            <img src="/assets/Safety/captain-safety.png" alt="" className="full2" />
            <img src="/assets/Safety/safety_groups_overview.png" alt="" />
        </div>
        <Footer/>
        </>
    )
}
export default Captain;
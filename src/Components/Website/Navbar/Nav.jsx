import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import Modal from "react-modal";
let Nav=()=>{
    let [pop,setPop]=useState(false);
    let [name,setName]=useState("");
    let [phoneNumber,setPhoneNumber]=useState("")
    let [logout,setlogout]=useState(false);
    let [showAccount,setShowAccount]=useState(false);
    let [firstLetter,setFirstLetter]=useState("");
    let [menuOpen, setMenuOpen] = useState(false);
    let navigate=useNavigate();
   useEffect(()=>{
    function account(){
        let storedName=localStorage.getItem("Name");
        setName(storedName);
        let storedPhoneNumber=localStorage.getItem("Phone Number");
        setPhoneNumber(storedPhoneNumber);
        console.log(name,phoneNumber)
        if(storedName){
            setFirstLetter(storedName[0].toUpperCase())
            console.log(firstLetter);
        }
        if(logout){
            localStorage.clear();
        }
        localStorage.setItem("Logout",true);
    }
    account()
   })
    return(
        <>
        <nav>
            <div className="logo" onClick={()=>window.location.reload()}>
                <img src="https://logowik.com/content/uploads/images/rapido-bike-taxi8263.jpg" alt=""/>
            </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fa fa-bars"></i>
            </div>
            <div className={`navbar ${menuOpen ? "open" : ""}`}>
               <ul>
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/about">About Us</NavLink></li>
                   <li><NavLink to="/safety">Safety</NavLink></li>
                   <li><NavLink to="/carrer">Carrers</NavLink></li>
                   <li><NavLink to="/blog">Blog</NavLink></li>
                   <li><NavLink to="/press">Press</NavLink></li>
                   <li><NavLink to="/contact">Contact Us</NavLink></li>
                   <button className="download_app" onClick={()=>setPop(true)}>Download App</button>
                   <div className="account" onMouseOver={()=>setShowAccount(true)} onClick={()=>setShowAccount(false)}><i className="fa-solid fa-user"></i>
                   {showAccount && (
                        <div className="dropdown-menu">
                           {!logout && name ?<>
                            <div className="image">{firstLetter}</div>
                            <p><strong>Hii, {name} !</strong></p>
                            <p style={{fontSize:"13px",marginTop:"10px"}}>{phoneNumber}</p>
                            <button onClick={()=>setlogout(true)}>Logout</button>
                           </>:
                           <div>
                            <p>Please login to book a ride</p>
                            <button onClick={()=>navigate("/login")}>Login</button>
                            </div>}
                        </div>
                    )}
                   </div>
               </ul>
            </div>
           {pop &&  
           <Modal
                isOpen={pop}
                onRequestClose={()=>setPop(false)}
                ariaHideApp={false}
                style={{content:{width:"50%",height:"35%",margin:"auto",marginTop:"150px",zIndex:"100",boxShadow:"0px 0px 15px rgb(0,0,0,0.5)",borderRadius:"10px",padding:"40px"},overlay:{zIndex:"100",backgroundColor:"#a49c9c54"}}}
                contentLabel="Example Modal">
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"20px",padding:"20px",position:"relative"}} className="modal_div">
                    <span style={{position:"absolute",right:"30px",top:"-40px",fontSize:"30px",cursor:"pointer"}} className="remove_cross" onClick={()=>setPop(false)}>&times;</span>
                    <div style={{ textAlign: "center",borderRight:"1px solid gray",width:"50%" }} className="right_div_none">
                        <h3>Google Play</h3>
                        <img src="/assets/captain_launcher.png" alt="Google Play Store" style={{ width: "150px", cursor: "pointer" }} onClick={() => window.open("https://play.google.com/store/search?q=rapido&c=apps", "_blank")}/>
                    </div>
                    <div style={{textAlign:"center",width:"50%"}}>
                        <h3>App Store</h3>
                        <img src="/assets/customer-ios.png" alt="Apple App Store" style={{ width: "120px", cursor: "pointer" ,marginTop:"30px"}} onClick={() => window.open("https://apps.apple.com/in/app/rapido-bike-taxi-auto-cabs/id1198464606?mt=8", "_blank")}/>
                    </div>
                </div>
            </Modal>}
        </nav>
        </>
    )
}
export default Nav;



// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./nav.css";
// import Modal from "react-modal";

// let Nav = () => {
//     const [pop, setPop] = useState(false);
//     const [name, setName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [logout, setLogout] = useState(false);
//     const [showAccount, setShowAccount] = useState(false);
//     const [firstLetter, setFirstLetter] = useState("");
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         let storedName = localStorage.getItem("Name");
//         setName(storedName);
//         let storedPhoneNumber = localStorage.getItem("Phone Number");
//         setPhoneNumber(storedPhoneNumber);
//         if (storedName) {
//             setFirstLetter(storedName[0].toUpperCase());
//         }
//         if (logout) {
//             localStorage.clear();
//         }
//         localStorage.setItem("Logout", true);
//     }, [logout]);

//     return (
//         <>
//             <nav>
//                 <div className="logo" onClick={() => window.location.reload()}>
//                     <img src="https://logowik.com/content/uploads/images/rapido-bike-taxi8263.jpg" alt="Logo" />
//                 </div>

//                 <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//                     <i className="fa fa-bars"></i>
//                 </div>

//                 <div className={`navbar ${menuOpen ? "open" : ""}`}>
//                     <ul>
//                         <li><NavLink to="/">Home</NavLink></li>
//                         <li><NavLink to="/about">About Us</NavLink></li>
//                         <li><NavLink to="/safety">Safety</NavLink></li>
//                         <li><NavLink to="/carrer">Carrers</NavLink></li>
//                         <li><NavLink to="/blog">Blog</NavLink></li>
//                         <li><NavLink to="/press">Press</NavLink></li>
//                         <li><NavLink to="/contact">Contact Us</NavLink></li>
//                         <button className="download_app" onClick={() => setPop(true)}>Download App</button>
//                         <div className="account" onMouseOver={() => setShowAccount(true)} onClick={() => setShowAccount(false)}>
//                             <i className="fa-solid fa-user"></i>
//                             {showAccount && (
//                                 <div className="dropdown-menu">
//                                     {!logout && name ? (
//                                         <>
//                                             <div className="image">{firstLetter}</div>
//                                             <p><strong>Hii, {name} !</strong></p>
//                                             <p style={{ fontSize: "13px", marginTop: "10px" }}>{phoneNumber}</p>
//                                             <button onClick={() => setLogout(true)}>Logout</button>
//                                         </>
//                                     ) : (
//                                         <div>
//                                             <p>Please login to book a ride</p>
//                                             <button onClick={() => navigate("/login")}>Login</button>
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </ul>
//                 </div>

//                 {pop && (
//                     <Modal
//                         isOpen={pop}
//                         onRequestClose={() => setPop(false)}
//                         ariaHideApp={false}
//                         style={{
//                             content: {
//                                 width: "50%", height: "35%", margin: "auto",
//                                 marginTop: "150px", zIndex: "100",
//                                 boxShadow: "0px 0px 15px rgb(0,0,0,0.5)",
//                                 borderRadius: "10px", padding: "40px"
//                             },
//                             overlay: {
//                                 zIndex: "100", backgroundColor: "#a49c9c54"
//                             }
//                         }}
//                         contentLabel="Download App Modal"
//                     >
//                         <div style={{
//                             display: "flex", justifyContent: "space-around",
//                             alignItems: "center", marginTop: "20px", padding: "20px", position: "relative"
//                         }}>
//                             <span style={{
//                                 position: "absolute", right: "30px", top: "-40px",
//                                 fontSize: "30px", cursor: "pointer"
//                             }} onClick={() => setPop(false)}>&times;</span>
//                             <div style={{ textAlign: "center", borderRight: "1px solid gray", width: "50%" }}>
//                                 <h3>Google Play</h3>
//                                 <img src="/assets/captain_launcher.png" alt="Google Play Store"
//                                     style={{ width: "150px", cursor: "pointer" }}
//                                     onClick={() => window.open("https://play.google.com/store/search?q=rapido&c=apps", "_blank")} />
//                             </div>
//                             <div style={{ textAlign: "center", width: "50%" }}>
//                                 <h3>App Store</h3>
//                                 <img src="/assets/customer-ios.png" alt="Apple App Store"
//                                     style={{ width: "120px", cursor: "pointer", marginTop: "30px" }}
//                                     onClick={() => window.open("https://apps.apple.com/in/app/rapido-bike-taxi-auto-cabs/id1198464606?mt=8", "_blank")} />
//                             </div>
//                         </div>
//                     </Modal>
//                 )}
//             </nav>
//         </>
//     )
// }
// export default Nav;



// // for highlighting the active page eelemnt we can use navlink because navlink by default it is having active className by using a.active in css and apply styles
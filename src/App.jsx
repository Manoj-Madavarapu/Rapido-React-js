import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Nav from "./Components/Website/Navbar/Nav";
import Home from "./Components/Website/Home/Home";
import Ride from "./Components/Ride Booking/Ride/Ride";
import About from "./Components/Website/About/About";
import Safety from "./Components/Website/Safety/Safety";
import Customer from "./Components/Website/Safety/Customer";
import Captain from "./Components/Website/Safety/Captain";
import Carrer from "./Components/Website/Carrers/Carrer";
import Blog from "./Components/Website/Blogs/Blog";
import Press from "./Components/Website/Press/Press";
import Contact from "./Components/Website/Contact/Contact";
import Login from "./Components/Ride Booking/Form/Login";
import Register from "./Components/Ride Booking/Form/Register";
import CaptainSearching from "./Components/Ride Booking/CaptainSearch/CaptainSearching";
import "./style.css"

let App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/safety" element={<Safety/>}/>
          <Route path="/customer" element={<Customer/>}/>
          <Route path="/captain" element={<Captain/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/carrer" element={<Carrer/>}/>
          <Route path="/press" element={<Press/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/ride" element={<Ride />}></Route>
          <Route path="/captainSearching" element={<CaptainSearching />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;
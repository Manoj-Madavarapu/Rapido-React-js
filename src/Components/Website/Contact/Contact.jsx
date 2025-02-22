import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./style.css"
let Contact=()=>{
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setphone]=useState("");
    let [select,setSelect]=useState("")
    let [submit,setSubmit]=useState(false);
    function validate(){
        if(name.trim()==""){
           return alert("Please Enter Your Name");
        }
        else if(email.trim()==""){
            return alert("Please Enter Your Email");
        }
        else if(phone.trim()==""){
            return alert("Please Enter Your Phone number");
        }
        else if(phone.length>10){
            return alert("Invlaid Phone number")
         }
        else if(select==""){
            return alert("Please select an option")
        }
        setSubmit(true);
    }
    function done(){
        setSubmit(false);
        setEmail("");
        setName("");
        setphone("");
        setSelect("");
    }
    return(
        <>
        <Nav/>
        <div className="contact">
            {!submit?
            <>
            <div className="form">
               <h1>You can find us here</h1>
               <h2>Find help for your quries here:</h2>
               <h3>Name</h3>
               <input type="text" placeholder="Enter your name" required onChange={(e)=>setName(e.target.value)}/>
               <h3>Email</h3>
               <input type="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
               <h3>Mobile number</h3>
               <input type="tel" placeholder="Enter your mobile number" required  onChange={(e)=>setphone(e.target.value)}/>
               <h3>Your are a</h3>
               <select id="" required onChange={(e)=>setSelect(e.target.value)}>
                 <option >--Select--</option>
                 <option value="customer">Customer</option>
                 <option value="captain">Captain</option>
               </select>
               <h3>Comment</h3>
               <textarea placeholder="Enter your comment"></textarea><br />
               <button onClick={validate}>Submit</button>
            </div>
            <div className="address">
                 <img src="/assets/Screenshot 2025-02-03 025503.png" alt="" />
                 <h2>Registerd Office Address</h2>
                 <p>Roppen Transportation Services Pvt Ltd, 3rd Floor, Sai Prithvi Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad - 500081.CIN:U52210TG2015PTC097115</p>
                 <h2>City Office:</h2>
                 <p>Roppen Transportation Services Pvt Ltd, #148, 1st Floor, SLV Nilaya, 5th Main 80ft road, HSR Layout 7th Sector, Bangalore 560102.</p>
                 <h2>Corporate Office:</h2>
                 <p>Mantri Commercio - Spatium Tower A, Sy No 51/2, 51/3, 51/4, Of Devarabeesanahalli Village And Hjem 39/5 Of Kariyammana Agrahara Village Varthur Hobli, Bangalore East Taluk, Bangalore.</p>
            </div>
            </>:

            <div className="thanks">
                  <img src="/assets/Screenshot 2025-02-03 035707.png" alt="" />
                  <h1>Thank You for reaching out {name},</h1>
                  <p>our team will reach out to you shortly.</p>
                  <button onClick={done}>Done</button>
            </div>
            }
        </div>
        <Footer/>
        </>
    )
}
export default Contact;






































// import { useState } from "react";
// import "./style.css"; // Import CSS

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Your message has been submitted!");
//     setFormData({ name: "", email: "", message: "" }); // Reset form
//   };

//   return (
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       <p>Need help? Get in touch with Rapido's support team.</p>

//       <div className="contact-info">
//         <div>
//           <h3>📍 Address</h3>
//           <p>Rapido Headquarters, Bangalore, India</p>
//         </div>
//         <div>
//           <h3>📞 Phone</h3>
//           <p>+91 98765 43210</p>
//         </div>
//         <div>
//           <h3>📧 Email</h3>
//           <p>support@rapido.com</p>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="contact-form">
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           required
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//           required
//         />

//         <label>Message</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Write your message here..."
//           rows="4"
//           required
//         />

//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

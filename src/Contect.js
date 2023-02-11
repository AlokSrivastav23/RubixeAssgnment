import React from "react";
import "./Contect.css";


function Contect(){
    return(
      <div className="contact">
      <div className="contact-info">
       <h2 className="headings">GET IN TOUCH</h2>
       <p className="paragraphs">Please complete the form and we will <br></br>
             get back to you</p>
     </div>
     <div className="contact-bar"></div>
     <div className="form-details">
       
       <form>
         <h5 className="contact-details">Name*</h5>
           <div className="form-groups"> 
             <input
               type="text"
               placeholder="Enter Your Name"
               name="name"
               id="name"
               required
             />
           </div>
           <h5 className="contact-details">Email*</h5>
           <div className="form-groups">
             <input
               type="email"
               placeholder="Enter Your Name"
               name="email"
               id="email"
               required
             />
           </div>
           <h5 className="contact-details">Mobile Number*</h5>
           <div className="form-groups">
             <input
               name="phone-number"
               id="phone"
               placeholder="Enter Your Mobile Number"
               required
             ></input>
           </div>
           <button> Register Now</button>
       </form>
     </div>
   </div>

 )
};

export default Contect;
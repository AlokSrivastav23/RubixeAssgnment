import "./Aboutus.css";


function Aboutus(){
    return(
        <div className="aboutus" >
            <div className="aboutus-container">
                <div className="child-container">
                    <h5>ABOUT US</h5>
          
                        <p className="para">Rubixe™ is a global technology company specializing in disruptive</p>
                        <p className="para">technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process</p>
                        <p className="para">Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe</p>
                        <p className="para">mission to enable businesses to leverage the full potential of disruptive </p> 
                        <p className="para">technologies to stay competitive in the market.</p>
                </div>
                <div className="child-container">
                        <h5>MENUS</h5>
                        <p className="para">Home</p>
                        <p className="para">Services</p>
                        <p className="para">Products</p>
                        <p className="para">Career</p>

                </div>
                <div className="child-containers">
                        <h5>LEARN MORE</h5>
                        <p className="para">About</p>
                        <p className="para">Contact Us</p>
                </div>
                <div className="child-containers" >
                        <h5>ADDRESS</h5>
                        <p className="para">Novel Tech Park, 1st Floor, Hosur Rd,</p>
                        <p className="para"> Kudlu gate, Bengaluru, Karnataka 560068</p>
                        <p className="para">Phone: 0804-717-8999</p>
                        <p className="para">Email: hi@rubixe.com</p>
                        <p className="para">SOCIAL MEDIA</p>
                      
        
                </div>
            </div>
        </div>
    
    );
}
export default Aboutus;
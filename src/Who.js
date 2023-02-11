import './Who.css';
import officeWork from "./assets/officeWork.jpg";
function Who() {
    return (
        <div className="About">
      <div className="right">
        <h1 className="heading">WHO WE ARE</h1>
        <p>Rubixe™ is a global technology company specializing in disruptive technologies - Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain, and Internet of Things (IoT).</p>
      <p>Rubixe™ mission is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable.</p>
      </div>
      <div className="left">
      <div className="border"></div>
      <img src={officeWork} className="left-img"></img>
      <div className="container"></div>
      </div>
      
      </div>
      
    );
  }
  
  export default Who;
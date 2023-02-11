import "./Card.css";
import Ai from "./assets/Ai.png";
import Second from "./assets/Second.png";
import third from "./assets/third.png";
import Fourth from "./assets/Fourth.png";
import five from "./assets/five.png";
export default function Card() {
  return (
    <div className="container2">
      <h2 className="card-heading">
        TECH FOR TEENS - A RUBIXIE <span>&#174;</span>
        INITIATIVE
      </h2>
      <div className="cards">
        <div className="card-container">
          <div className="card-top">
            <div className="card-nummering">
              <div className="card-specification"><b>01</b></div>
            </div>
          </div>
          <div className="card-bottom">
            <img className="card-img" src={Ai} alt="" />
            <p className="card-info">
              Introducing AI to children in an age appropriate <br></br>
              manner.
            </p>
          </div>
        </div>
        <div className="card-container">
          <div
            className="card-top"
            id="card-header"
            style={{ background: "#C71585" }}
          >
            <div className="card-nummering">
              <div className="card-specification" style={{transform:'rotate(-180deg)',color:'#C71585',marginTop:'2px'}} ><b>02</b></div>
            </div>
          </div>
          <div className="card-bottom">
            <img className="card-img" src={Second} alt="" style={{transform: 'rotate(-180deg)'}} />
            <p className="card-info" style={{transform: 'rotate(-180deg)'}}>
              Gain awareness on AI and build an interactive story around it
              
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-top" style={{ background: "#FF5F1F" }}>
            <div className="card-nummering">
              <div className="card-specification" style={{color:'#FF5F1F'}}><b>03</b></div>
            </div>
          </div>
          <div className="card-bottom">
            <img className="card-img" src={third} alt="" />
            <p className="card-info">
              Acquire <br></br> programming skills <br></br>in a user-friendly format
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-top" style={{ background: "#306144" }}>
            <div className="card-nummering">
              <div className="card-specification"  style={{transform: 'rotate(-180deg)',color:'#306144',marginTop:'2px '}}><b>04</b></div>
            </div>
          </div>
          <div className="card-bottom">
            <img className="card-img" src={Fourth} alt="" style={{transform: 'rotate(-180deg)'}}/>
            <p className="card-info" style={{transform: 'rotate(-180deg)'}}>
              Exposure to mini projects on diverse topics
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-top" style={{ background: "#EB8921" }}>
            <div className="card-nummering">
              <div className="card-specification" style={{color:'#EB8921'}}><b>05</b></div>
            </div>
          </div>
          <div className="card-bottom">
            <img className="card-img" src={five} alt="" />
            <p className="card-info">
              Train the teachers programme 
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


import './App.css';
import './poster.css';
import poster from "./assets/poster.jpg";
function Poster() {
    return (
      <div className="poster">
        <img src={poster} className="poster-img"></img>
      </div>
    );
  }
  
  export default Poster;
import './App.css';
import Poster from './poster';
import logo from "./assets/logo.png";
import Who from './Who';
import Started from './Started';
import Card from './Card';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Contect from './Contect';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
			<img src={logo} alt="logo" id="logo"/>
			<nav >
				<a href="#">HOME</a>
				<a href="#">SERVICES</a>
				<a href="#">PRODUCTS</a>
                <a href="#">AI INTERNSHIP</a>
                <a href="#">CAREER</a>
                <a href="#">BLOG</a>
                <a href="#">CONTACT US</a>

			</nav>
      </header>
      <Poster />
      <Who />
      <Started />
      <Card />
      <Contect />
      <Aboutus />
      
      <Footer />
    </div>
    
  );
}

export default App;

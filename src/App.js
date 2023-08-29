
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from "./Compenents/Enterpage/Enter";
import Home from "./Compenents/Home/Home";
import './App.css'
import Contact from "./Compenents/Contact/Contact";
import About from "./Compenents/About/About";
import Project from "./Compenents/Project/Project";
// import About from "./Compenents/About/About";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Enter/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>  
           <Route path="/Project" element={<Project/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/pages/home";
import Navbar from "./components/inc/navbar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import MyProfile from "./components/pages/myprofile";
import Explore from "./components/pages/explore";
import Investorprofile from "./components/pages/investors_profile";
import Incubators from "./components/pages/incubators";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Investor from "./components/pages/investor";
import Startup from "./components/pages/startup";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/explore" element={<Explore />}></Route>
        <Route exact path="/myprofile" element={<MyProfile />}></Route>
        <Route exact path="/investor" element={<Investor />}></Route>
        <Route exact path="/startup" element={<Startup/>}></Route>
        <Route exact path="/investors_profile" element={<Investorprofile/>}></Route>
        <Route exact path="/incubators" element={<Incubators/>}></Route>
      </Routes> 
      </div>
    </Router>
    
  );
}

export default App;

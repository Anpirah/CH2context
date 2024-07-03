import React from "react";
import Home from "../pages/Home"; 
import MyJob from "../pages/MyJob";
import Profile from "../pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const RoutesApp = () => {
    return(
        <Router>  
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/myjob">MAIYOB</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/myjob" element={<MyJob />} />
            </Routes>
        </Router>
    );
};


export default RoutesApp;
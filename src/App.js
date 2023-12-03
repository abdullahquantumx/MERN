import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./Context/notes/NoteState";
import Alerts from "./components/Alerts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";



const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alerts message='This is me'/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/SignUp" element={<SignUp />} />
              
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
};

export default App;

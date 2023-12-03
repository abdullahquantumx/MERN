import React, { useContext, useEffect,useRef,useState } from "react";
import noteContext from "../Context/notes/noteContext.js";
import { useNavigate } from "react-router-dom";

const About = () => {
  // const context = useContext(noteContext);
  // const { notes, getNotes,editNote } = context;
  const navigate= useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log('about');
    }
    else{
      navigate("/login")
    }})

    
  return (
    <div>About</div>
  )
}

export default About
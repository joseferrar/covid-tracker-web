import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1 style={{color: '#fff'}}>About</h1>
    </div>
  );
}

export default About;

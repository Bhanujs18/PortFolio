import React from "react";
import Projects from "./Projects";

import { Typography } from "@mui/material";

import Aboutmegit from "./Aboutmegit";

const AboutMe = () => {

  
 
  return (
    <div>
        <div>
          <form method="GET">
            <Typography>
              {" "}
              <h1 className="aboutmeheading">About Me</h1>
            </Typography>
            <div className="aboutpage">
            <Aboutmegit />
              <Projects />              
            </div>
          </form>
        </div>
    </div>
  );
};

export default AboutMe;

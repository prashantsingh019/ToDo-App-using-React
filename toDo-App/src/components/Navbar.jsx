import React from "react";
import "./Navbar.css";
import toDo from "../assets/toDo.png";
import gitHub from "../assets/github.png";
import reactLogo from "../assets/reactLogo.png";
import questMark from "../assets/questMark.png";


import { faReact } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={toDo} alt="_logo" width="30px" />
        <div className="name">To Do App</div>
        <span className="text-green-500">&copy; Managed and developed by Prashant Singh</span>
      </div>

      <div className="nav-links">
        <Button name="GitHub"  icon={gitHub}/>
        <Button name="Project Link" icon={reactLogo}/>
        <Button name="How to use" icon={questMark}/>
      </div>
    </div>
  );
}

export default Navbar;

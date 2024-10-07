import React from "react";
import "./Navbar.css";
import toDo from "../assets/toDo.png";
import gitHub from "../assets/github.png";
import reactLogo from "../assets/reactLogo.png";
import questMark from "../assets/questMark.png";
import Button from "./Button";

function Navbar() {
  return (
    <div className="navbar  max-sm:justify-center">

      <div className="logo">
        <img src={toDo} alt="_logo" width="30px" />
        <div className="App_name max-sm:text-center">To Do App</div>
        <span className="author text-xl text-[#a3a3a3] hidden lg:block">&copy; Managed and developed by Prashant Singh</span>
      </div>

      <div className="nav-links text-[#767676] max-sm:hidden">
        <Button name="GitHub"  icon={gitHub} url="https://github.com/prashantsingh019"/>
        <Button name="Project Link" icon={reactLogo} url="#"/>
        <Button name="How to use" icon={questMark} url="#"/>
      </div>
    </div>
  );
}

export default Navbar;

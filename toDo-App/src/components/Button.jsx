import React from 'react'
import './Navbar.css';
function Button(props) {
  return (
    <>
      <button type="button" className="btn-nav hover:text-violet-700 transition-all duration-50 max-md:text-sm"> 
        <a href={props.url}>{props.name}</a>
       
       <img src={props.icon} width={"30px"}/>
      </button>
    </>
  )
}

export default Button

import React from 'react'
import logo from '../assets/logo.png'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Header() {
    return (
        <div className = "Header container">
            <div className = "ten columns">
            <img src={logo} alt="logo" />
  &nbsp;&nbsp;&nbsp;
            <h2><b>Sagnik </b></h2>
           
            </div>
           
            
            {/*<div className = "two columns">
                <button>
                    <feather className="icons sun"></feather>
                </button>
            </div>*/}
        </div>
    )
}

export default Header

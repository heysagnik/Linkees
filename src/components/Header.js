import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import logo from '../Logo/Logo-2.png'


function Header() {
    return (
        <div className = "Header container">
            <div className = "ten columns">
            <img src={logo} alt="logo" />
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

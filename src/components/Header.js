import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Header() {
    return (
        <div className = "Header container">
            <div className = "ten columns">
            <img src="https://avatars.githubusercontent.com/u/70798495?v=4" alt="logo" />
  &nbsp;&nbsp;&nbsp;
            <h2>Sagnik </h2>
           
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

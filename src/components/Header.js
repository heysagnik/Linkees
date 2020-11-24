import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import style from '../css/components.css';
function Header() {
    return (
        <div className = "Header container">
            <div className = "ten columns">
             . sagnik
            </div>
           <div>
           <img className={style.profile} src="https://avatars0.githubusercontent.com/u/28679360?s=460&u=043e532cfc62169437853995504c073352eca53f&v=4" align ="center" alt="Sagnik Sahoo" style="height:96px; width:96px;"/>
            <p className={style.username}>
            Hi👋
            </p>
             </div>
            {/* <div className = "two columns">
                <button>
                    <feather className="icons sun"></feather>
                </button>
            </div> */}
        </div>
    )
}

export default Header

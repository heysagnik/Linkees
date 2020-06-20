import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Card(props) {
    return (
        <a href={props.link}>
            <div className = "Card four columns">
                <img className = "cover" src = {props.cover}></img>
                <div className="data">
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </a>
    )
}

export default Card
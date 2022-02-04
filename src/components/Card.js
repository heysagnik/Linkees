import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import { motion } from "framer-motion"

function Card(props) {

    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.1,
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 50
            },
          }),
        hidden: { opacity: 0, y: 200}
    }

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <motion.div className = "Card four columns"
                initial="hidden"
                animate="visible"
                custom={props.i}
                variants={variants}>
                <img className = "cover" src = {props.cover} alt=""></img>
                <div className="data">
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </motion.div>
        </a>
    )
}

export default Card

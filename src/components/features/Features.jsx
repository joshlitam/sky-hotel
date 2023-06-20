import React from 'react'
import "./features.css"
import Wifi from "../../img/wifi-solid.svg"
import Feature from '../feature/Feature'
import Accent2 from "../../img/accent-2.png"
import { features } from "../../data"

const Features = () => {
  return (
    <div className="f">
      <div className="f-wrapper">
        <h2 className="f-title">Features</h2>
        <img src={Accent2} alt="" className="f-accent" />
        <div className="f-card-wrapper">
          {features.map(feature => (
            <Feature key={feature.id} img={feature.img} title={feature.title} caption={feature.caption} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features

import React from 'react'
import "./feature.css"
import Wifi from "../../img/wifi-solid.svg"

const Feature = ({img, title, caption}) => {
  return (
    <div className="fc">
      <div className="fc-wrapper">
        <img src={img} alt="" className="fc-picture" />
        <h3 className="fc-title">{title}</h3>
        <p className="fc-caption">{caption}</p>
      </div>
    </div>
  )
}

export default Feature

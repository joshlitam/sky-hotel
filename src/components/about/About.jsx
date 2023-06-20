import React from 'react'
import "./about.css"
import Accent from "../../img/accent.png"
import Hero2 from "../../img/hero-jumbotron-2.jpg"
import Hero3 from "../../img/hero-jumbotron-3.jpg"

const About = () => {
  return (
    <div className="a">
    <div className="a-wrapper">
        <div className="a-left">
            <div className="a-title-container">
                <h2 className="a-title">Luxury Awaits</h2>
                <img className="a-accent" src={Accent} alt="" />
            </div>
            <div className="a-caption">Sky Hotel offers 60 rooms, sanitized and maintained with the highest quality around the clock to ensure all guests have a wonderful time at an affordable price</div>
            <button className="a-button">Gallery</button>
        </div>
        <div className="a-right">
            <div className="a-img-container">
                <img className="a-img" src={Hero2} alt="" />
                <img className="a-img" src={Hero3} alt="" />
                <img className="a-img" src={Hero2} alt="" />
            </div>
            <button className="a-button-collapsed">Gallery</button>
        </div>
    </div>
    
    </div>
  )
}

export default About

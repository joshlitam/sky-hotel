import React from 'react'
import "./intro.css"
import logo from "../../img/logo.png"
import Navbar from '../navbar/Navbar'


const Intro = () => {
  return (
    <div className="i">
        <Navbar />
        <div className="i-wrapper">
            <div className="i-caption-box">
                <div className="i-caption">Enjoy Luxurious and Affordable Rooms in the Heart of Bacolor, Pampanga</div>
                <button className="i-button">View our Rooms</button>
            </div>
        </div>
    </div>
  )
}

export default Intro

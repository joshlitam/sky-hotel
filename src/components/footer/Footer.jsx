import React from 'react'
import "./footer.css"
import Logo from "../../img/logo.png"

const Footer = () => {
  return (
    <div className="e">
        <div className="e-wrapper">
            <img src={Logo} alt="" className="e-logo" />
            <p className="e-copyright">Copyright 2023</p>
        </div>
    </div>
  )
}

export default Footer

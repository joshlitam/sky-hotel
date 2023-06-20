import React from 'react'
import "./navbar.css"
import Logo from "../../img/logo.png"
import Hamburg from "../../img/hamburg.png"

const Navbar = () => {
  return (
    <div className="n">
        <div className="n-wrapper">
            <li className="n-list">
                <ul className="n-list-item-container"><a className="n-list-item" href="#">HOME</a></ul>
                <ul className="n-list-item-container"><a className="n-list-item" href="#">ABOUT</a></ul>
                <ul className="n-list-item-container"><img className="n-logo" src={Logo} alt="" /></ul>
                <ul className="n-list-item-container"><a className="n-list-item" href="#">MENU</a></ul>
                <ul className="n-list-item-container"><a className="n-list-item" href="#">CONTACT</a></ul>
            </li>
        </div>
        <div className="n-wrapper-collapsed">
            <img className="n-logo" src={Logo} alt="" />
            <button className="n-hamburg"><img className="n-hamburg-pic" src={Hamburg} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import "./contact.css"
import Accent2 from "../../img/accent-2.png"
import Accent from "../../img/accent.png"

const Contact = () => {
  return (
    <div className="c">
        <div className="c-wrapper">
            <div className="c-left">
                <h3 className="c-left-title">Find us!</h3>
                <img src={Accent} alt="" className="c-left-accent" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d73323.43761648666!2d120.62977178844952!3d15.015531604088572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3396f7ff3fc2ff6d%3A0x7553d9700923b6ae!2sSky%20Hotel%20Pampanga%2C%20Sitio%20Gugu%20Bridge%2C%20Bacolor%2C%202001%20Pampanga!3m2!1d15.0079096!2d120.65539!5e0!3m2!1sen!2sph!4v1687236144027!5m2!1sen!2sph"style={{border: 0}} className="c-iframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p>San Vicente, Bacolor, Pampanga 2001</p>
            </div>
            <div className="c-right"> 
                <div className="c-right-wrapper">
                    <h3 className="c-title"><b>Have feedback?</b></h3>
                    <img src={Accent2} alt="" className="c-accent" />
                    <p className="c-caption">Leave us a message!</p>
                    <form className="c-form-wrapper">
                        <input className="c-input" type="text" placeholder='Name' name="user_name" />
                        <input className="c-input" type="text" placeholder='Subject' name="user_subject" />
                        <input className="c-input" type="text" placeholder='Email' name="user_email" />
                        <textarea className="c-textarea" name="Message" placeholder='Message' id="" rows="5"></textarea>
                        <button className="c-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact

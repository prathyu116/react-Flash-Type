import React from 'react'
import './Nav.css'
import logo from  './../../assets/logo.png'
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-log" src={logo } alt="logo"/>
                <p className="flash-logo-text">Flash Type</p>

            </div>
           
            
        </div>
    )
}

export default Nav

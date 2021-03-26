import React from 'react'
import logo from '../../img/logo.png'

function Header(props) {
    return (
        <div className="headerComponent">
            <div className="logoContainer">
                <img src={logo} alt="logo"/>
            </div>
            <div className="buttonLogin">{props.children}</div>
        </div>
    )
}

export default Header

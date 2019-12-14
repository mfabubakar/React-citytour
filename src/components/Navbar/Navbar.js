import React, { Component } from 'react'
import "./Navbar.scss"
import logo from "../../logo.png"
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img src={logo} alt="City tuors logo" />
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">About</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link active ">Tours</a>
                    </li>

                </ul>
            </nav>
        )
    }
}

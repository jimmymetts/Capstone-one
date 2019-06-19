import React, { Component } from "react"
import { Link } from "react-router-dom"
import Button from "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/sign in">Sign In</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/login">Log Out</Link>
                        </li>


                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar


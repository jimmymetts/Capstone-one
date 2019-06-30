import React, { Component } from "react"
import { Link } from "react-router-dom"





class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Welcome">Welcome</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login">Log Out</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/PosterPageOne">Make Your Poster</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/PosterPageTwo">Poster Templates</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/MyPosters">My Posters</Link>
                        </li>



                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar




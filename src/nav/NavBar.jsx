import React, { Component } from "react"
import { Link } from "react-router-dom"
import Button from "bootstrap/dist/css/bootstrap.min.css"


// function refreshPage() {
//     window.location.reload();
// }

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">

                    <ul className="nav nav-pills">

                        <li className="nav-item">
                            <Link className="nav-link text-l" light to="/login">Login In</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login">Log Out</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/PosterPageOne">New Poster</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/PosterPageTwo">Poster Templates</Link>
                        </li>
                        {/* 
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/PosterPageTwo">onClick={refreshPage}>Reload</Link>
                        </li> */}

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



{/* <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Sign Up</Link>
                        </li> */}
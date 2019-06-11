import React, { Component } from "react"
import AppViews from "./components/AppViews"
import NavBar from "./nav/NavBar"
import PosterPageTwo from "./components/PosterPageTwo/PosterPageTwo"

export default class Nutshell extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <AppViews />
            </React.Fragment>
        )
    }
}
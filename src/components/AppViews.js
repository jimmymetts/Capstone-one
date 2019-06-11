import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import PosterPageOne from "./PosterPageOne/PosterPageOne";
import PosterPageTwo from "./PosterPageTwo/PosterPageTwo";
import PosterPageThree from "./PosterPageThree/PosterPageThree";
// import ReactPdf from "./reactPdf/ReactPdf"
import Kennel from "../nav/NavBar";


export default class AppViews extends Component {

    state = {
       artistName:[],
       showDate:[],
       venue:[],
       posterTemplates: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/posterTemplates")
            .then(r => r.json())
            .then(posterTemplates => newState.posterTemplates = posterTemplates)
    }

    render() {
        return (
            <React.Fragment >

                <Route exact path="/login" 
                    render={(props) => {
                            return <PosterPageOne
                            {...props}
                            artistName={this.state.artistName}
                            showDate={this.state.showDate}
                            venue={this.state.venue}
                            handleFieldChange = {this.handleFieldChange}
                            />
                    }
                    } />

                <Route exact path="/posterPageTwo" 
                    render={(props) => {
                            return <PosterPageTwo
                            {...props}
                            artistName={this.state.artistName}
                            showDate={this.state.showDate}
                            venue={this.state.venue}
                            handleFieldChange = {this.handleFieldChange}
                            />
                    }
                    } />

                 <Route exact path="/posterPageThree" 
                    render={(props) => {
                            return <PosterPageThree
                            {...props}
                            artistName={this.state.artistName}
                            showDate={this.state.showDate}
                            venue={this.state.venue}
                            handleFieldChange = {this.handleFieldChange}
                            />
                    }
                    } />


                            />
                                        </React.Fragment>
            )
        }
    }


    // .then(() => fetch("http://localhost:5002/employees")
    // .then(r => r.json()))
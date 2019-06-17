import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import Login from "./login/LoginForm"
import PosterPageOne from "./PosterPageOne/PosterPageOne";
import PosterPageTwo from "./PosterPageTwo/PosterPageTwo";

// import ReactPdf from "./reactPdf/ReactPdf"
import Kennel from "../nav/NavBar";
import DbCalls from "../modules/DbCalls"
import PosterTemplateOne from "./PosterTemplateOne/PosterTemplateOne"
import PosterTemplateTwo from "./PosterTemplateTwo/PosterTemplateTwo"
import PosterTemplateThree from "./PosterTemplateThree/PosterTemplateThree";
import PosterTemplateFour from "./PosterTemplateFour/PosterTemplateFour";


export default class AppViews extends Component {

    state = {
       login: [],
       users: [],
       artistName:[],
       showDate:[],
       venue:[],
       posterTemplates: [],
       posterData: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      componentDidMount() {
        const newState = {}

       DbCalls.getAllPosters()
            .then(posterData => newState.posterData = posterData)        
            .then(() => DbCalls.getAllPostersTemplates())
            .then(posterTemplates => newState.posterTemplates = posterTemplates)
            .then(() => DbCalls.getAllUsers())         
            .then(users => newState.users = users)
           .then(() => this.setState(newState))

    }

    addPoster = (event) =>
    DbCalls.postNewPoster(event)
        .then(() => DbCalls.getAllPosters())
        .then(posterData =>
            this.setState({
                posterData: posterData
            })
        );

    render() {
        console.log("State", this.state)
        return (
            <React.Fragment >


<Route exact path="/login" 
                    render={(props) => {
                            return <Login 
                            { ...props }                              
                            users={this.state.users} />
                   }
                    } />

                <Route exact path="/PosterPageONe" 
                    render={(props) => {
                            return <PosterPageOne
                            {...props}
                            artistName={this.state.artistName}
                            showDate={this.state.showDate}
                            venue={this.state.venue}
                            handleFieldChange = {this.handleFieldChange}
                            addPoster={this.addPoster}
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
                            posterData={this.state.posterData}
                            handleFieldChange = {this.handleFieldChange}
                            addPoster={this.addPoster}
                            />
                    }
                    } />

                <Route exact path="/posterTemplateOne" 
                                render={(props) => {
                                        return <PosterTemplateOne
                                        {...props}
                                        artistName={this.state.artistName}
                                        showDate={this.state.showDate}
                                        venue={this.state.venue}
                                        handleFieldChange = {this.handleFieldChange}
                                        />
                                }
                                } />

                <Route exact path="/posterTemplateTwo" 
                                render={(props) => {
                                        return <PosterTemplateTwo
                                        {...props}
                                        artistName={this.state.artistName}
                                        showDate={this.state.showDate}
                                        venue={this.state.venue}
                                        handleFieldChange = {this.handleFieldChange}
                                        />
                                }
                                } />

                 <Route exact path="/posterTemplateThree" 
                    render={(props) => {
                            return <PosterTemplateThree
                            {...props}
                            artistName={this.state.artistName}
                            showDate={this.state.showDate}
                            venue={this.state.venue}
                            handleFieldChange = {this.handleFieldChange}
                            />
                    }
                    } />

                <Route exact path="/posterTemplateFour" 
                                render={(props) => {
                                        return <PosterTemplateFour
                                        {...props}
                                        artistName={this.state.artistName}
                                        showDate={this.state.showDate}
                                        venue={this.state.venue}
                                        handleFieldChange = {this.handleFieldChange}
                                        />
                                }
                                } />


                           
                                        </React.Fragment>
            )
        }
    }


//     fetch("http://localhost:5002/posterData")
//     .then(r => r.json())
//     .then(posterTemplates => newState.posterTemplates = posterTemplates)
//     .then(() => this.setState(newState))

//     DbCalls.getAllUsers()
//     .then(users => newState.users = users)
// }
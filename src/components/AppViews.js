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
import Registration from "./registration/RegistrationPage"
import MyPosters from "./myPosters/MyPosters";
import PosterEditForm from "./PosterEditForm"
import Welcome from "./Welcome/Welcome"
import Welcome2 from "./Welcome/Welcome2"
import WelcomeBlank from "./Welcome/WelcomeBlank"



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

      getAllPosters = () => {
        DbCalls.getAllPosters()
        .then(posterData =>
            this.setState({
                posterData: posterData
            })
        );
      }    
      
      deletePosters = (id) => {
        const newState = {};
        DbCalls.deletePoster(id)
            .then(DbCalls.getAllPosters())
            .then(posterData => { newState.Poster = posterData})
            .then(() => this.setState(newState))
            .then(window.location.reload())
    };

        editPosters = (posterId, editedPoster) => {
            return DbCalls.put(posterId, editedPoster )
                .then(() => DbCalls.getAllPosters())
                .then(posters => {
                    this.setState({
                        posters: posters
                    })
                });
        };



    render() {
        // console.log("State", this.state)
        console.log("poster data", this.state.posterData)
        
        return (
            <React.Fragment >


<Route exact path="/welcome"
                    render={(props) => {
                        return <Welcome {
                            ...props
                        }
                        users={this.state.users}
                        addUser={this.addUser}/>
                    }
                } />

<Route exact path="/welcome2"
                    render={(props) => {
                        return <Welcome2 {
                            ...props
                        }
                        users={this.state.users}
                        addUser={this.addUser}/>
                    }
                } />

<Route exact path="/welcomeBlank"
                    render={(props) => {
                        return <WelcomeBlank {
                            ...props
                        }
                        users={this.state.users}
                        addUser={this.addUser}/>
                    }
                } />

<Route exact path="/registration"
                    render={(props) => {
                        return <Registration {
                            ...props
                        }
                        users={this.state.users}
                        addUser={this.addUser}/>
                    }
                } />

<Route exact path="/login" 
                    render={(props) => {
                            return <Login 
                            { ...props }                              
                            users={this.state.users} />
                   }
                    } />

                <Route exact path="/PosterPageOne" 
                    render={(props) => {
                            return <PosterPageOne
                            {...props}
                            artistName={this.state.artistName}
                            showDate={this.state.showDate}
                            venue={this.state.venue}
                            handleFieldChange = {this.handleFieldChange}
                            addPoster={this.addPoster}
                            getAllPosters={this.getAllPosters}
                            posterData={this.state.posterData}
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
                                        addPoster={this.addPoster}
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
                                        posterData={this.state.posterData}
                                        addPoster={this.addPoster}

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
                            addPoster={this.addPoster}

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
                                        addPoster={this.addPoster}

                                        />
                                }
                                } />

                <Route exact path="/myPosters" 
                                render={(props) => {
                                        return <MyPosters
                                        {...props}
                                        artistName={this.state.artistName}
                                        showDate={this.state.showDate}
                                        venue={this.state.venue}
                                        handleFieldChange = {this.handleFieldChange}
                                        posterData={this.state.posterData}
                                        deletePosters={this.deletePosters}
                                        editPosters={this.editPosters}
                                        />
                                }
                                } />
                        <Route path="/posters/:posterId(\d+)/edit"
                            render={props => {
                                return <PosterEditForm {
                                    ...props
                                }
                                editPosters={this.editPosters} />
                            }
                            } />


                           
                                        </React.Fragment>
            )
        }
    }


/* took below code (fetch) out of above line 39 - where dbcalls are */

//     fetch("http://localhost:5002/posterData")
//     .then(r => r.json())
//     .then(posterTemplates => newState.posterTemplates = posterTemplates)
//     .then(() => this.setState(newState))

//     DbCalls.getAllUsers()
//     .then(users => newState.users = users)
// }



// handleFieldChange = evt => {
//     const stateToChange = {};
//     stateToChange[evt.target.id] = evt.target.value;
//     this.setState(stateToChange);
//   };
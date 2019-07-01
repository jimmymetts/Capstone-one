import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Login from "./login/LoginForm";
import PosterPageOne from "./PosterPageOne/PosterPageOne";
import PosterPageTwo from "./PosterPageTwo/PosterPageTwo";
import DbCalls from "../modules/DbCalls";
import PosterTemplateOne from "./PosterTemplateOne/PosterTemplateOne";
import PosterTemplateTwo from "./PosterTemplateTwo/PosterTemplateTwo";
import PosterTemplateThree from "./PosterTemplateThree/PosterTemplateThree";
import PosterTemplateFour from "./PosterTemplateFour/PosterTemplateFour";
import MyPosters from "./myPosters/MyPosters";
import PosterEditForm from "./PosterEditForm";
import Welcome from "./Welcome/Welcome";
import ReactPDFPageOne from "./ReactPDFPageOne";
import ReactPDFPageTwo from "./ReactPDFPageTwo";
import ReactPDFPageThree from "./ReactPDFPageThree";
import ReactPDFPageFour from "./ReactPDFPageFour";





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
        DbCalls.deletePoster(id)    /* delete Poster in dbcalls */
            .then(() => DbCalls.getAllPosters())
            .then(posterData => { newState.posterData = posterData})
            .then(() => {          
            this.setState(newState)               
            })
    }

        editPosters = (posterId, editedPoster) => {
            return DbCalls.put(posterId, editedPoster )
                .then(() => DbCalls.getAllPosters())
                .then(posters => {
                    this.setState({
                        posterData: posters
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
                        />
                    }
                } />

<Route exact path="/login" 
                    render={(props) => {
                            return <Login 
                            { ...props }                              
                            users={this.state.users} />
                   }
                    } />

                <Route exact path="/PosterPageOne"   /*new poster input form */
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

                <Route exact path="/posterPageTwo"    /* poster template/options page */
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

                <Route exact path="/myPosters"   /* all posters of user */
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
                        <Route path="/posters/:posterId(\d+)/edit"   /*poster edit form */
                            render={props => {
                                return <PosterEditForm {
                                    ...props
                                }
                                editPosters={this.editPosters} />
                            }
                            } />

                        <Route exact path="/ReactPDFPageOne"   /* PDF download page */
                        render={(props) => {
                            return <PDFViewer> <ReactPDFPageOne 
                                {...props}
                                artistName={this.state.artistName}
                                showDate={this.state.showDate}
                                venue={this.state.venue}
                            
                            />
                            </PDFViewer>
                          }
                          } />

                        <Route exact path="/ReactPDFPageTwo"
                        render={(props) => {
                            return <PDFViewer> <ReactPDFPageTwo 
                                {...props}
                                artistName={this.state.artistName}
                                showDate={this.state.showDate}
                                venue={this.state.venue}
                            
                            />
                            </PDFViewer>
                          }
                          } />

                        <Route exact path="/ReactPDFPageThree"
                        render={(props) => {
                            return <PDFViewer> <ReactPDFPageThree 
                            {...props}
                            artistName={this.state.artistName}
                            showDate={this.state.showDate}
                            venue={this.state.venue}
                            />
                            </PDFViewer>
                          }
                          } />
                          

                          <Route exact path="/ReactPDFPageFour"
                        render={(props) => {
                            return <PDFViewer> <ReactPDFPageFour {
                                ...props}
                                artistName={this.state.artistName}
                                showDate={this.state.showDate}
                                venue={this.state.venue}
                            />
                            </PDFViewer>
                          }
                          } />


                           
                                        </React.Fragment>
            )
        }
    }







    



    {/* <Route exact path="/registration"
                    render={(props) => {
                        return <Registration {
                            ...props
                        }
                        users={this.state.users}
                        addUser={this.addUser}/>
                    }
                } /> */}
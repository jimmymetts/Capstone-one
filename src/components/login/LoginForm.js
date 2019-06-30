import React, { Component } from "react"
import "../login/Login.css"

import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';



export default class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    

    handleLogin = (evt) => {
        console.log("Users", this.props.users)
        let allUsers = this.props.users
        let inputEmail = this.state.email
        let inputPassword = this.state.password
        let matchUser = allUsers.find(user => user.email === inputEmail && user.password === inputPassword)
        console.log(this.state.email)
        evt.preventDefault();
        if (this.state.email | this.state.password === ""){
            window.alert("Must enter email & password to login");
        }
        else if(!matchUser){
            window.alert("User not found");
          } else {
        sessionStorage.setItem(
            "credentials",
            matchUser.id,
            )
            this.props.history.push("/PosterPageOne");
            window.alert(`Welcome back ${matchUser.name}!`)
        }
    }


    render() {
        // console.log("Users", this.props.users)
        return (
            <React.Fragment>

<div className="EventsForm">
        <div className="PageOneCard" >
            <div className="RegisterWelcome">
            
              <p className="LoginFormLineWelcome"><h1> Show Poster NOW! </h1></p>
                <br></br>
                <br></br>
            </div>
            <form 
            className="LoginForm">
                <h2 className="">Login</h2>
                <label htmlFor="inputEmail">
                    Email address:</label>
                
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder=""
                       required="" autoFocus="" />
                       <br></br>
                       <br></br>
                       <br></br>
                <label htmlFor="inputPassword">
                    Password:</label>
                
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder=""
                       required="" />
                       <br></br>
                       <br></br>
                        
                <button type="submit"
                className="btn btn-primary LoginSubmit" onClick={this.handleLogin}>Login</button>
             
                

            </form>
           

            </div>
            </div>
            </React.Fragment>
        )
    }
}





   // componentDidMount() {
    //     if(sessionStorage.getItem("credentials") !== null){
    //         sessionStorage.removeItem("credentials")
    //     }
    // }



                    {/* <p> Don't have an account? </p> */}
                {/* <button className="btn btn-primary" onClick={() => this.props.history.push("/registration")}>
                    Register
                </button> */}
import React, { Component } from "react"
import "./RegistrationPage.css"



export default class Registration extends Component {
    state = {
        name: "",
        email: "",
        password: "",
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      constructNewUser = evt => {
        evt.preventDefault();
       
          const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          };
    
          this.props
          .addUser(newUser)
          .then(() => this.props.history.push("/login"));

      };

    render() {
        return (
            <React.Fragment>

<div className="EventsForm">
        <div className="PageOneCard" >
              <div className="RegisterWelcome">
              <h1> Welcome Show Poster NOW! </h1>
              <br></br>
              </div>
            <form
            className="LoginForm">
                <h1 className="">Register</h1>
                <label htmlFor="inputName">
                    Name:
                </label>
                <input onChange={this.handleFieldChange} type="text"
                        id="name"
                        placeholder=""
                        required="" 
                        autoFocus="" />
                        <br></br>
                <label htmlFor="inputEmail">
                    Email Address:
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder=""
                       required="" autoFocus="" />
                       <br></br>
                <label htmlFor="inputPassword">
                    Password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder=""
                       required="" />
                       <br></br>
                <button type="submit"
                className="btn btn-primary LoginSubmit"
                onClick={this.constructNewUser}>
                    Create Account
                </button>
                <br></br>
                <p> Already have an account? </p>
                <button
                className="btn btn-primary"
                onClick={() => this.props.history.push("/login")}>
                    Log In
                </button>
            </form>

            </div>
            </div>
        </React.Fragment>
        )
    }
}
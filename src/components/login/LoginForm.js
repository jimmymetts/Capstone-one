import React, { Component } from "react"


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
        // console.log("matchUsers", matchUser.id)
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
        console.log("Users", this.props.users)
        return (
            <React.Fragment>
            <div className="RegisterWelcome">
              <h1> Welcome to Show Poster NOW! </h1>
              <br></br>
             
              </div>
            <form
            className="LoginForm">
                <h1 className="">Login</h1>
                <label htmlFor="inputEmail">
                    Email address:
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
                onClick={this.handleLogin}>
                    Login
                </button>
                <br></br>
                <p> Don't have an account? </p>
                <button
                className="btn btn-primary"
                onClick={() => this.props.history.push("/PosterPageOne")}>
                    Register
                </button>
            </form>
            </React.Fragment>
        )
    }
}
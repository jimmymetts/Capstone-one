import React, { Component } from "react"
import "./Welcome.css"
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
// import "./PosterPageOne.css"




export default class Welcome extends Component {

    render() {
      return(
          <React.Fragment>

<div className='WelcomeBackground'>
<div className="EventsForm">
        <div className="PageOneCard" >
        <center><font size="20">Welcome</font></center>

              <br></br>
            <center><font size="20">To</font></center>
            <br></br>
          <center><font size="20">Show Poster NOW!</font></center>
              <br></br>
            <br></br>
            <br></br>

      </div>
      </div>
      </div>
  
          </React.Fragment>
      )
  }
}
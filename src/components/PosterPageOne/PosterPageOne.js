import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./PosterPageOne.css"

let myUser = sessionStorage.getItem(
  "credentials",
)


export default class Example extends React.Component {


  pushToAllPosters = (evt) => {
    evt.preventDefault()
    this.props.history.push("/myPosters")
  }

  render() {
    return (
        <div className="EventsForm">
        <div className="PageOneCard" >
          <center><font size="10">Show Poster NOW!</font></center>
          {/* <p><font size="10">This is some text!</font></p> */}
          <br>
          </br>
          <br>
          </br>
      <Form  >
        <FormGroup className="textColor" >
          <Label  for="artistName">Artist Name</Label>
          <Input type="text" name="name" id="artistName" required={true} onChange={this.props.handleFieldChange} placeholder="Artist Name" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="showDate">Show Date</Label>
          <Input type="text" name="name" id="showDate" required={true} onChange={this.props.handleFieldChange} placeholder="Show Date" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="venue">Venue</Label>
          <Input type="text" name="name" id="venue" required={true} onChange={this.props.handleFieldChange} placeholder="Venue" />
        </FormGroup>
      </Form>
        <Button  onClick={() => this.props.history.push("/posterPageTwo")}>Next</Button>
        <Button  className="buttonSpacing" onClick={this.pushToAllPosters}>View my posters</Button>
      </div>
      </div>

      
    );
  }
}
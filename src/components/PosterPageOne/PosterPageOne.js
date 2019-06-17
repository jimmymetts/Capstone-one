import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./PosterPageOne.css"

export default class Example extends React.Component {

  state = {
    artistName: "",
    showDate: "",
    venue: "",
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewPoster = evt => {
    evt.preventDefault();
      const poster = {
        artistName: this.state.artistName,
        showDate: this.state.showDate,
        venue: this.state.venue
      };
    

    this.props.addPoster(poster)
    .then(() => this.props.history.push("/posterPageTwo"));
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
      <Form required="true" >
        <FormGroup className="textColor" required="true">
          <Label  for="artistName">Artist Name</Label>
          <Input type="text" name="name" id="artistName" required="true" onChange={this.props.handleFieldChange} placeholder="Artist Name" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="showDate">Show Date</Label>
          <Input type="text" name="name" id="showDate" required="true" onChange={this.props.handleFieldChange} placeholder="Show Date" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="venue">Venue</Label>
          <Input type="text" name="name" id="venue" required="true" onChange={this.props.handleFieldChange} placeholder="Venue" />
        </FormGroup>
        <Button type="submit"  onClick={this.constructNewPoster}>Next</Button>
      </Form>
      </div>
      </div>

      
    );
  }
}
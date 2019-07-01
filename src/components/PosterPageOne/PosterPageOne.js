import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import "./PosterPageOne.css"




export default class PosterPageOne extends React.Component {


  pushToAllPosters = (evt) => {
    evt.preventDefault()
    this.props.history.push("/myPosters")
  }

  render() {
    return (
        <div className="EventsForm">
        <div className="PageOneCard" >
          <center><font size="10">Make Your Poster</font></center>
          <br></br>
         
          
      <Form className="posterForm" >
        <FormGroup className="textColor" >
          <Label  for="artistName">Artist Name</Label>
          <Input type="text" name="name" id="artistName" required={true} onChange={this.props.handleFieldChange} placeholder="Artist Name" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="showDate">Show Date/Time</Label>
          <Input type="text" name="name" id="showDate" required={true} onChange={this.props.handleFieldChange} placeholder="Show Date/Time" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="venue">Venue</Label>
          <Input type="text" name="name" id="venue" required={true} onChange={this.props.handleFieldChange} placeholder="Venue" />
        </FormGroup>
      </Form>
      <br></br>
        <Button  onClick={() => this.props.history.push("/posterPageTwo")}>Next</Button>
        <Button  className="buttonSpacing" onClick={this.pushToAllPosters}>View my posters</Button>
      </div>
      </div>

      
    );
  }
}
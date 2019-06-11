import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./PosterPageOne.css"

export default class Example extends React.Component {


  render() {
    return (
        <div className="EventsForm">
        <div className="PageOneCard" >
          <center><font size="10">Show Poster NOW!</font></center>
          {/* <p><font size="24">This is some text!</font></p> */}
          <br>
          </br>
          <br>
          </br>
      <Form >
        <FormGroup className="textColor">
          <Label  for="artistName">Artist Name</Label>
          <Input type="text" name="name" id="artistName" onChange={this.props.handleFieldChange} placeholder="Artist Name" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="showDate">Show Date</Label>
          <Input type="text" name="name" id="showDate" onChange={this.props.handleFieldChange} placeholder="Show Date" />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="venue">Venue</Label>
          <Input type="text" name="name" id="venue" onChange={this.props.handleFieldChange} placeholder="Venue" />
        </FormGroup>



        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button onClick={() => {this.props.history.push("/posterPageTwo") }}>Next</Button>
      </Form>
      </div>
      </div>

      
    );
  }
}
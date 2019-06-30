import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import DbCalls from "../modules/DbCalls"
import "./EditForm.css"




export default class PosterEditForm extends Component {
    state = {
        id:this.props.match.params.posterId,
        artistName:"",
        showDate:"",
        venue:"",
        userId:"",
        templateId:""
      }
    
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

  updateExistingPoster = evt => {
    evt.preventDefault()
    
    const existingPoster = {
      id:this.props.match.params.posterId,
      artistName: this.state.artistName,
      showDate: this.state.showDate,
      venue: this.state.venue,
      templateId:this.state.templateId,
      userId: this.state.userId
    }

    this.props.editPosters(this.props.match.params.posterId, existingPoster)
    .then(() => this.props.history.push("/MyPosters"))

  }

    componentDidMount() {      /* gets data currently in poster - current poster and all info*/
      DbCalls.getPoster(this.props.match.params.posterId)
      .then(poster => {
        this.setState({
          id:this.props.match.params.posterId,
          artistName: poster.artistName,
          showDate: poster.showDate,
          venue:poster.venue,
          templateId:poster.templateId,
          userId:poster.userId
        });
      });
    };

/* edit form below */

    render() {
        return(
            <React.Fragment>

<div className="EventsForm">      
        <div className="PageOneCard" >
        <section className="EditForm" >
        <center><font size="10">Edit Show Poster </font></center>
        <br></br>
                <Form  >
        <FormGroup className="textColor">
          <Label  for="artistName">Artist Name</Label>
          <Input type="text" name="name" id="artistName" required={true} onChange={this.handleFieldChange} placeholder={this.state.artistName} />
        </FormGroup>
        <br></br>
        <FormGroup className="textColor">
          <Label  for="showDate">Show Date</Label>
          <Input type="text" name="name" id="showDate" required={true} onChange={this.handleFieldChange} placeholder={this.state.showDate} />
        </FormGroup>
        <br></br>
        <FormGroup className="textColor">
          <Label  for="venue">Venue</Label>
          <Input type="text" name="name" id="venue" required={true} onChange={this.handleFieldChange} placeholder={this.state.venue} />
        </FormGroup>
        
      </Form>
      <Button  onClick={this.updateExistingPoster}>Update</Button>
      </section>

      </div>

</div>

            </React.Fragment>
        )
    }
}



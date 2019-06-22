import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DbCalls from "../modules/DbCalls"

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
    
    const existingPoster ={
      id:this.props.match.params.posterId,
      artistName: this.state.artistName,
      showDate: this.state.showDate,
      venue: this.state.venue,
      templateId:this.state.templateId,
      userId: this.state.userId
    }

    this.props.editPosters(this.props.match.params.posterId, existingPoster)
    .then(() => this.props.history.push("/myPosters"))
    .then(() => window.location.reload())
  }

    componentDidMount() {
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

    render() {
        return(
            <React.Fragment>

<div className="EventsForm">
        <div className="PageOneCard" >
                <Form  >
        <FormGroup className="textColor" >
          <Label  for="artistName">Artist Name</Label>
          <Input type="text" name="name" id="artistName" required={true} onChange={this.handleFieldChange} placeholder={this.state.artistName} />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="showDate">Show Date</Label>
          <Input type="text" name="name" id="showDate" required={true} onChange={this.handleFieldChange} placeholder={this.state.showDate} />
        </FormGroup>
        <FormGroup className="textColor">
          <Label  for="venue">Venue</Label>
          <Input type="text" name="name" id="venue" required={true} onChange={this.handleFieldChange} placeholder={this.state.venue} />
        </FormGroup>
      </Form>
      <Button  onClick={this.updateExistingPoster}>Update</Button>

      </div>

</div>
            </React.Fragment>
        )
    }
}



import React, { Component } from "react"
import "./PosterTemplateFour.css"

let myUser = sessionStorage.getItem(
    "credentials",
  )

export default class PosterTemplateFour extends Component {

    constructNewPoster = ()=> {
          const poster = {
            artistName: this.props.artistName,
            showDate: this.props.showDate,
            venue: this.props.venue,
            templateId: "4",
            userId: myUser
          };
        
    console.log("Poster", poster)
        this.props.addPoster(poster)
        .then(() => this.props.history.push("/myPosters"));
    }


    render() {
        return (
            <React.Fragment>
        <section className='TemplateOnePageBackgroundColor'>
                <section className="TemplatesCardFour" id="4">
                    <div className="pageBackground">

                        <div className="TemplateFourOutterBorder" >
                        <center><font size="24">Live Show!</font></center>
                            <br></br>
                            <div className="TemplateFourContent">
                                <br></br>
                                <br></br>
                                <center><font size="14"> {this.props.artistName}</font></center>
                                <br></br>
                                <br></br>
                                <center><h2>{this.props.showDate}</h2></center>
                                <br></br>
                                <br></br>
                                <center><h2>{this.props.venue}</h2></center>

                            </div>


                            <div className="form-group">
                                <label htmlFor="noteType"></label>

                            </div>

                        </div>
                        <button className="btn btn-warning tempFourdownloadbtn"
                            onClick={() => { this.props.history.push("/ReactPDFPageFour") }}>Download PDF</button>

                            <button className="btn btn-info tempFourSavebtn"
                            onClick={() => { this.constructNewPoster() }}>Save</button>

                            <button className="btn btn-dark tempFourBackbtn"
                        onClick={() => {this.props.history.push("/posterPageTwo") }}>Back</button>
                    </div>


                </section>
                </section>
            </React.Fragment>


        )
    }
}
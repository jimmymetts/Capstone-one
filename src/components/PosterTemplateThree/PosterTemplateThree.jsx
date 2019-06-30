import React, { Component } from "react"
import "./PosterTemplateThree.css"

let myUser = sessionStorage.getItem(
    "credentials",
)


export default class PosterTemplateThree extends Component {

    constructNewPoster = () => {
        const poster = {
            artistName: this.props.artistName,
            showDate: this.props.showDate,
            venue: this.props.venue,
            templateId: "3",
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
                    <section className="TemplatesCardThree" >
                        <div className="EventsBorderCard">

                            <div className="TemplateThreeOutterBorder" id="3">

                                <p className="ShowCaseTempThree"><center><font size="28">SHOWCASE!</font></center></p>

                                <div className="TemplateThreeContent">
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
                            <button className="btn btn-warning tempThreedownloadbtn"
                                onClick={() => { this.props.history.push("/ReactPDFPageThree") }}>Download PDF</button>

                            <button className="btn btn-success tempThreeSavebtn"
                                onClick={() => { this.constructNewPoster() }}>Save</button>

                            <button className="btn btn-dark tempThreeBackbtn"
                                onClick={() => { this.props.history.push("/posterPageTwo") }}>Back</button>
                        </div>


                    </section>
                </section>
            </React.Fragment>


        )
    }
}



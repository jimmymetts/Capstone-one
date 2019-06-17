import React, { Component } from "react"
import "./PosterTemplateFour.css"



export default class PosterTemplateFour extends Component {
    render() {
        return (
            <React.Fragment>

                <section className="TemplatesCardFour">
                    <div className="EventsBorderCard">

                        <div className="TemplateFourOutterBorder" >
                            <center><font size="24"> </font></center>
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
                        <button className="btn btn-warning DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterTemplateFour") }}>Download PDF</button>
                            <button className="btn btn-info DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterTemplateFour") }}>Edit</button>
                                                    <button className="btn btn-success DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterTemplate") }}>Save</button>
                            <button className="btn btn-dark DeleteNewsBtn"
                        onClick={() => {this.props.history.push("/posterPageTwo") }}>Back</button>
                         <button className="btn btn-danger DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterTemplate") }}>Delete</button>
                        
                    </div>


                </section>
            </React.Fragment>


        )
    }
}
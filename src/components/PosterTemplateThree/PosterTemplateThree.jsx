import React, { Component } from "react"
import "./PosterTemplateThree.css"



export default class PosterTemplateThree extends Component {
    render() {
        return (
            <React.Fragment>

                <section className="TemplatesCardThree">
                    <div className="EventsBorderCard">

                        <div className="TemplateThreeOutterBorder" >
                            <center><font size="24"> </font></center>
                            <br></br>
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
                        <button className="btn btn-warning DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterTemplateThree") }}>Download PDF</button>
                        <button className="btn btn-dark DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterTemplateThree") }}>Edit</button>
                        <button className="btn btn-danger DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterTemplateThree") }}>Save</button>
                        <button className="btn btn-dark DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterPageTwo") }}>Back</button>


                    </div>


                </section>
            </React.Fragment>


        )
    }
}



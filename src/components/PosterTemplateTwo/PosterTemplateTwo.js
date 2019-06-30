import React, { Component } from "react"
import "./PosterTemplateTwo.css"
// import Preview from '../Fonts/Preview.otf'






let myUser = sessionStorage.getItem(
    "credentials",
  )

export default class PosterTemplatetwo extends Component {

    constructNewPoster = ()=> {
          const poster = {
            artistName: this.props.artistName,
            showDate: this.props.showDate,
            venue: this.props.venue,
            templateId: "2",
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
                <section className="TemplatesCardTwo" id="2">
                    <div className="EventsBorderCard">

                        <div className="TemplateTwoOutterBorder" >
                            
                        <center><font size="24"></font></center>
                            <br></br>
                            <br></br>
                            <br></br>
                        
                            <div className="TemplateTwoContent">
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
                        <button className="btn btn-warning tempTwodownloadbtn"
                            onClick={() => { this.props.history.push("/ReactPDFPageTwo") }}>Download PDF</button>

                        <button className="btn btn-info tempTwoSavebtn"
                            onClick={() => { this.constructNewPoster()}}>Save</button>

                        <button className="btn btn-dark tempTwoBackbtn"
                             onClick={() => {this.props.history.push("/posterPageTwo") }}>Back</button>
                         
                    </div>


                </section>
                </section>
            </React.Fragment>


        )
    }
}
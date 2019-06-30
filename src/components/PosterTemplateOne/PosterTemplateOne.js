import React, { Component } from "react"
import "./PosterTemplateOne.css"
// import testimage from '../Images/PdfTest.jpeg'





let myUser = sessionStorage.getItem(
    "credentials",
  )

export default class PosterTemplateOne extends Component {

    constructNewPoster = () => { 
          const poster = {
            artistName: this.props.artistName,
            showDate: this.props.showDate,
            venue: this.props.venue,
            templateId: "1",
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
                <section className="TemplatesCardOne" id="1">
                                    
                    <div >
                                           
                        <div className="TemplateOneOutterBorder"  >
                                      
                        <center><font size="24">SHOWCASE!</font></center>
                           
                            
                            <div className="TemplateOneContent">
                            <br></br>
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
                        <button className="btn btn-warning tempOnedownloadbtn"
                            onClick={() => { this.props.history.push("/ReactPDFPageOne") }}>Download PDF</button>

                        <button className="btn btn-success tempOneSavebtn"
                            onClick={() => { this.constructNewPoster() }}>Save</button>

                        <button className="btn btn-dark tempOneBackbtn"
                            onClick={() => {this.props.history.push("/posterPageTwo") }}>Back</button>

                    </div>


                </section>
                </section>
            </React.Fragment>


        )
    }
}
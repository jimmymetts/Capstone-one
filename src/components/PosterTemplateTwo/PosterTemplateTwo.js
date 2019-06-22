import React, { Component } from "react"
import "./PosterTemplateTwo.css"
import DownloadLink from "react-download-link";

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

                <section className="TemplatesCardTwo" id="2">
                    <div className="EventsBorderCard">

                        <div className="TemplateTwoOutterBorder" >
                            <center><font size="24">SHOWCASE!</font></center>
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
                        <button className="btn btn-warning"
                            onClick={() => { this.props.history.push("/posterTemplateFour") }}>Download PDF</button>

                        <button className="btn btn-info"
                            onClick={() => { this.constructNewPoster()}}>Save</button>

                        <button className="btn btn-dark"
                             onClick={() => {this.props.history.push("/posterPageTwo") }}>Back</button>
                         
                         <DownloadLink
                         filename="myfile.txt"
                         exportFile={() => Promise.resolve("NOT A SHOW POSTER YET!!")}
                     >
                             Save to disk
                    >
                            
                </DownloadLink>
                         
                    </div>


                </section>
            </React.Fragment>


        )
    }
}
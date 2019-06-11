import React, { Component } from "react"



export default class PosterPageThree extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="EventsForm">
                    <div className="PageOneCard" >



                        <center> <h1>{this.props.artistName}</h1></center>

                        <center> <h1>{this.props.showDate}</h1></center>

                        <center> <h1>{this.props.venue}</h1></center>

                        <button className="btn btn-warning DeleteNewsBtn"
                            onClick={() => { this.props.history.push("/posterPageThree") }}>Download PDF</button>
                    </div>

                </div>

            </React.Fragment>


        )
    }
}

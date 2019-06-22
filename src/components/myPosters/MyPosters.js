import React, { Component } from "react"

export default class MyPosters extends Component { 

    componentDidMount(){
        console.log(this.props.posterData)
    }


    render() {
        return (
            <React.Fragment>

{
        this.props.posterData.map(onePoster => {
            if(onePoster.templateId === "1"){
                return <div key= {onePoster.id}>
                <section className="TemplatesCardOne" >
                <div className="EventsBorderCard">
                
                <div className="TemplateOneOutterBorder" id="1" >
                    <center><font size="24"> </font></center>             
                        <br></br>
                <div className="TemplateOneContent">               
                    
                    <br></br>
                <center><font size="10"> {onePoster.artistName}</font></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.showDate}</h2></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.venue}</h2></center>

                </div>
                <div className="form-group">
            <label htmlFor="noteType"></label>
                
            </div>

                </div>
                    <button className="btn btn-dark"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateOne") }}>Download PDF</button>
                </div>
                </section>
                </div>
            } else if (onePoster.templateId === "2"){
                return <div key= {onePoster.id}>
                <section className="TemplatesCardTwo" >
                <div className="EventsBorderCard">
                
                <div className="TemplateTwoOutterBorder" id="1" >
                    <center><font size="24"> </font></center>             
                        <br></br>
                <div className="TemplateTwoContent">               
                    
                    <br></br>
                <center><font size="10"> {onePoster.artistName}</font></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.showDate}</h2></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.venue}</h2></center>

                </div>
                <div className="form-group">
            <label htmlFor="noteType"></label>
                
            </div>

                </div>
                    <button className="btn btn-dark"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateTwo") }}>Download PDF</button>
                </div>
                </section>
                </div>
            } else if (onePoster.templateId === "3"){
                return <div key= {onePoster.id}>
                <section className="TemplatesCardThree" >
                <div className="EventsBorderCard">
                
                <div className="TemplateThreeOutterBorder" id="1" >
                    <center><font size="24"> </font></center>             
                        <br></br>
                <div className="TemplateThreeContent">               
                    
                    <br></br>
                <center><font size="10"> {onePoster.artistName}</font></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.showDate}</h2></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.venue}</h2></center>

                </div>
                <div className="form-group">
            <label htmlFor="noteType"></label>
                
            </div>

                </div>
                    <button className="btn btn-dark"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateThree") }}>Download PDF</button>
                </div>
                </section>
                </div>
            } else if (onePoster.templateId === "4"){ 
                return <div key= {onePoster.id}>
                <section className="TemplatesCardFour" >
                <div className="EventsBorderCard">
                
                <div className="TemplateFourOutterBorder" id="1" >
                    <center><font size="24"> </font></center>             
                        <br></br>
                <div className="TemplateFourContent">               
                    
                    <br></br>
                <center><font size="10"> {onePoster.artistName}</font></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.showDate}</h2></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.venue}</h2></center>

                </div>
                <div className="form-group">
            <label htmlFor="noteType"></label>
                
            </div>

                </div>
                    <button className="btn btn-dark"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateFour") }}>Download PDF</button>
                </div>
                </section>
                </div>
            }
        } 
    )
    }     
            </React.Fragment>
        )
    }
}


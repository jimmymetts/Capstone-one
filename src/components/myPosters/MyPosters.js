import React, { Component } from "react"




export default class MyPosters extends Component { 



    render() {
        return (
            <React.Fragment>
                <section className='TemplateOnePageBackgroundColor'>
                 
{
        this.props.posterData.map(onePoster => {
            if(onePoster.templateId === "1"){
                return <div key= {onePoster.id}>


                <section className="TemplatesCardOne">

                <div className="EventsBorderCard">
                
                <div className="TemplateOneOutterBorder" id="1" >
                    <center><font size="24">SHOWCASE!</font></center>             
                       
                <div className="TemplateOneContent">               
                <br></br>
                    <br></br>
                    <br></br>
                <center><font size="14"> {onePoster.artistName}</font></center>
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
                    <button className="btn btn-dark MyPostersOneDeletebtn"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing  MyPostersOneEditbtn"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    {/* <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateOne") }}>Download PDF</button> */}
                </div>
                </section>
                </div>
            } else if (onePoster.templateId === "2"){
                return <div key= {onePoster.id}>
                <section className="TemplatesCardTwo" >
                <div className="EventsBorderCard">
                
                <div className="TemplateTwoOutterBorder" id="2" >

                <center><font size="24"></font></center>
               
                <br></br>
                    <br></br>
            <div className="TemplateTwoContent">               
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <center><font size="14"> {onePoster.artistName}</font></center>
                    <br></br>
                    
                   <center><h2>{onePoster.showDate}</h2></center>
                   <br></br>
                   
                    <center><h2>{onePoster.venue}</h2></center>

                </div>
                
                
                <div className="form-group">
            <label htmlFor="noteType"></label>
                
            </div>

                </div>
                    <button className="btn btn-dark MyPostersTwoDeletebtn"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing MyPostersTwoEditbtn"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    {/* <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateTwo") }}>Download PDF</button> */}
                </div>
                </section>
                </div>
            } else if (onePoster.templateId === "3"){
                return <div key= {onePoster.id}>
                <section className="TemplatesCardThree" >
                <div className="EventsBorderCard">
                
                    <div className="TemplateThreeOutterBorder" id="3" >
                    <p className="ShowCaseTempThree"><center><font size="24">SHOWCASE!</font></center></p>             
                         
                         <div className="TemplateThreeContent">               
                                <br></br>
                                <br></br>
                         <center><font size="14"> {onePoster.artistName}</font></center>
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
                    <button className="btn btn-dark MyPostersThreeDeletebtn"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing  MyPostersThreeDeletebtn"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    {/* <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateThree") }}>Download PDF</button> */}
                </div>
                </section>
                </div>
            } else if (onePoster.templateId === "4"){ 
                return <div key= {onePoster.id}>
                <section className="TemplatesCardFour" >
                <div className="EventsBorderCard">
                
                <div className="TemplateFourOutterBorder" id="4" >
                    <center><font size="24">SHOWCASE! </font></center>             
                        <br></br>
                <div className="TemplateFourContent">               
                    
                    <br></br>
                <center><font size="14"> {onePoster.artistName}</font></center>
                            <br></br>
                            <br></br>
                    <center><h1>{onePoster.showDate}</h1></center>
                            <br></br>
                            <br></br>
                    <center><h2>{onePoster.venue}</h2></center>

                </div>
                <div className="form-group">
            <label htmlFor="noteType"></label>
                
            </div>

                </div>
                    <button className="btn btn-dark MyPostersFourDeletebtn"
                            onClick={() => this.props.deletePosters(onePoster.id)}>Delete Poster
                    </button>
                    <button className="btn btn-dark buttonSpacing  MyPostersFourEditbtn"
                            onClick={() => {
                                this.props.history.push(`/posters/${onePoster.id}/edit`);}}>Edit Poster
                    </button>
                    {/* <button className="btn btn-warning buttonSpacing"
                            onClick={() => { this.props.history.push("/posterTemplateFour") }}>Download PDF</button> */}
                
                </div>
                
                </section>
                </div>
                
                
                
            }
        } 
    )
    }     </section>
            </React.Fragment>
        )
    }
}


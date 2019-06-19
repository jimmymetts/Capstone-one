import React, { Component } from "react"
import "./PosterPageTwo.css"


export default class PosterPageTwo extends Component { 

   render() {
       return (
           <React.Fragment>
           
    <section className="TemplatesCardOne" >
         <div className="EventsBorderCard">
           
         <div className="TemplateOneOutterBorder" id="1" >
             <center><font size="24"> </font></center>             
                  <br></br>
         <div className="TemplateOneContent">               
             
             <br></br>
        <center><font size="10"> {this.props.artistName}</font></center>
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
             <button className="btn btn-dark DeleteNewsBtn"
                     onClick={() => {this.props.history.push("/posterTemplateOne") }}>Choose This Template
             </button>
        </div>
         
      
           
        </section>



     <section className="TemplatesCardTwo" >
           <div className="EventsBorderCard">
           
           <div className="TemplateTwoOutterBorder" id="2">
           
            <center><font size="24"> </font></center>
                    <br></br>
                 <div className="TemplateTwoContent">
                        
                         <br></br>
           <center><font size="10"> {this.props.artistName}</font></center>
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
           <button className="btn btn-dark DeleteNewsBtn"
                           onClick={() => {this.props.history.push("/posterTemplateTwo") }}>Choose This Template</button>
           </div>
        </section>

        <section className="TemplatesCardThree" >
                <div className="EventsBorderCard">
           
                     <div className="TemplateThreeOutterBorder" id="3" >
          
                         <center><font size="24"> </font></center>
                             <br></br>
                <div className="TemplateThreeContent">
                             
                             <br></br>
                     <center><font size="10"> {this.props.artistName}</font></center>
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
           <button className="btn btn-dark DeleteNewsBtn"
            onClick={() => {this.props.history.push("/posterTemplateThree") }}>Choose This Template</button>
           </div>
           
           </section>



        <section className="TemplatesCardFour" >
            <div className="EventsBorderCard">
           
                 <div className="TemplateFourOutterBorder" id="4">

                        <center><font size="24"> CONCERT!</font></center>
                         <br></br>
                    <div className="TemplateFourContent"> 
                             <br></br>
                        <center><font size="10"> {this.props.artistName}</font></center>
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
                 <button className="btn btn-dark DeleteNewsBtn"
                 onClick={() => {this.props.history.push("/posterTemplateFour") }}>Choose This Template</button>
           </div>
           
           </section>
           </React.Fragment>
         )
             
     }
  }
          









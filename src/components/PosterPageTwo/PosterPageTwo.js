import React, { Component } from "react"
import "./PosterPageTwo.css"
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';



export default class PosterPageTwo extends Component { 

   render() {
       return (
           <React.Fragment>
           <section className="templatesBackgroundColor">
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
             <button className="btn btn-dark ChooseThisTemplateBtn buttonUpOne"
                     onClick={() => {this.props.history.push("/posterTemplateOne") }}>Choose This Template
             </button>
        </div>           
        </section>


     <section className="TemplatesCardTwo" id="2" >
           <div className="EventsBorderCard">
           
                 <div className="TemplateTwoOutterBorder" >
           
                <center><font size="24"></font></center>
                
                 <div className="TemplateTwoContent">
                       
                            <br></br>
                            <br></br>
                            <br></br>
                           <p className="TempTwoTextDown"> <center><font size="16"> {this.props.artistName}</font></center>
                            <br></br>
                            
                            <p className="TempTwolineTwo"><center ><h2>{this.props.showDate}</h2></center></p>
                            <br></br>
                            
                            <p className="TempTwolineThree"></p><center><h2>{this.props.venue}</h2></center></p>
                    
                        </div>

                        
              <div className="form-group">
          <label htmlFor="noteType"></label>
         
          </div>

           </div>
           
           <button className="btn btn-dark ChooseThisTemplateBtn buttonUpTwo"
                           onClick={() => {this.props.history.push("/posterTemplateTwo") }}>Choose This Template</button>
           </div>
        </section>



        <section className="TemplatesCardThree" >
                <div className="EventsBorderCard">
           
                     <div className="TemplateThreeOutterBorder " id="3" >
                     <p className="ShowCase"><center><font  size="24">SHOWCASE!</font></center></p>
                            
                          
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
           <button className="btn btn-dark ChooseThisTemplateBtn  buttonUpThree"
            onClick={() => {this.props.history.push("/posterTemplateThree") }}>Choose This Template</button>
           </div>          
           </section>



        <section className="TemplatesCardFour" >
            <div className="EventsBorderCard">
           
                 <div className="TemplateFourOutterBorder" id="4">

                 <center><font size="24">SHOWCASE!</font></center>
                            <br></br>
                            <div className="TemplateFourContent">
                                <br></br>
                                <br></br>
                                <center><font size="14"> {this.props.artistName}</font></center>
                                <br></br>
                                <br></br>
                                <center><h1>{this.props.showDate}</h1></center>
                                <br></br>
                                <br></br>
                                <center><h1>{this.props.venue}</h1></center>
                            
                        </div>
              <div className="form-group">
          <label htmlFor="noteType"></label>
         
        </div>

           </div>
                 <button className="btn btn-dark ChooseThisTemplateBtn  buttonUpFour"
                 onClick={() => {this.props.history.push("/posterTemplateFour") }}>Choose This Template</button>
           </div>
           
           </section>
           </section>
           </React.Fragment>
         )
             
     }
  }
          









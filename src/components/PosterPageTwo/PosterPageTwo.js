import React, { Component } from "react"
import   "bootstrap/dist/css/bootstrap.min.css"

// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';



export default class PosterPageTwo extends Component {
   render() {
       return (
           <React.Fragment>

           <div className="EventsForm">
           <div className="PageOneCard" >

           <div class="content">

           <center><h1>{this.props.artistName}</h1></center>

               <center><h1>{this.props.showDate}</h1></center>

               <center><h1>{this.props.venue}</h1></center>

           </div>
                       <button
                           type="button"
                           className="btn btn-success EditNewsBtn"
                           onClick={() => {this.props.history.push("/posterPageThree") }}>Edit</button>
                       <button className="btn btn-primary DeleteNewsBtn"
                           onClick={() => {this.props.history.push("/posterPageThree") }}>Delete</button>
                       <button className="btn btn-warning DeleteNewsBtn"
                           onClick={() => {this.props.history.push("/posterPageThree") }}>Next Page</button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/posterTemplates//${this.props.template.id}/edit`);
                            }}
                            >
                            Edit
                            </button>   

              <div className="form-group">
          <label htmlFor="noteType"></label>
          <select
            defaultValue=""
            name="noteTypes"
            id="noteTypeId"
            onChange={this.handleFieldChange}
          >
            <option value="">Selecter</option>
            {/* {this.props.noteTypes.map(e => (
              <option key={e.id} id={e.id} value={e.id}>
                {e.name}
              </option>
            ))} */}
          </select>
        </div>

           </div>

           </div>




          </React.Fragment>


       )
   }
}



{/* <button variant="btn-warning" onClick={() => {this.props.history.push("/posterPageThree") }}>Warning</button> */}

{/* <div className="posterPageTwo"></div> */}


// Create styles
// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4'
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     }
//   });
   
  // Create Document Component
//   const MyDocument = () => (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Section #2</Text>
//         </View>
//       </Page>
//     </Document>
//   );
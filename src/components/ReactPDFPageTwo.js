import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image, Font  } from '@react-pdf/renderer';
// import testimage from './Images/PdfTest.jpeg'
import testimage from './Images/Abomb.png'
// import JacquesFont from './Fonts/JacquesFrancoisShadow-Regular.ttf'
// import AmazingKids from './Fonts/AmazingKids.ttf'
import Preview from './Fonts/Preview.otf'


Font.register({
  family: 'Preview',
  src: Preview
});


const styles = StyleSheet.create({

  pdfPageTwo: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    alignContent: 'spaceBetween',
      
  },
  pdfPageTwoBackground:{                   /* placement of background image */
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      display: 'block',
      height: '100%',
      width: '100%'
  },

  // section: {     /* inside border */
  //   margin: 50,   /* targets outside */
  //   padding: 10,  /* will push Showcase down/up */
  //   flexGrow: 10,
  //   border:5,
  //   borderColor: 'white',
  //   borderRadius: 30,
  // },
  
  // sectionOne: {    /* border for top line of text */
  //     margin: 50,                     /* targets outside */
  //     padding: 10,                   /* will push Showcase down/up */
  //     flexGrow: 0,
  //     border:5,
  //     borderColor: 'white',
  //     borderRadius: 0,
  //   },

  // text: {
  //     fontSize:'30',
  //     // color:'black',
  //     textAlign:'center',
  //     margin:-10,
  //     marginTop:100,
  //     fontFamily: 'AmazingKids'
  // },
  pdfPageTwoTop: {
      fontSize:'40',
      color:'#FC8724',
      textAlign:'center',
      margin:0,
      marginTop:350,  /* will push all 3 text lines down at the same time */
      fontFamily: 'Preview'
  },

  pdfPageTwoMiddle: {
      fontSize:'26',
      color:'#FC8724',
      textAlign:'center',
      margin:25,
      marginTop:20,
      fontFamily: 'Preview'
  },
  pdfPageTwoBottom: {
      fontSize:'26',
      color:'#FC8724',
      textAlign:'center',
      margin:20,
      marginTop:5,
      fontFamily: 'Preview'
  },
  // pdfPageTwoShowcase: {
  //     fontSize:'34',
  //     color:'#FC8724',
  //     textAlign:'center',
  //     marginTop:-60,  /* moves "showcase up/down" */
  //     fontFamily: 'Preview'
  // },
  // textBorder: {
  //    border:5,
  //    borderColor: 'white',
  // },
});


export default class ReactPDFPageTwo extends Component {

  render = () => {
    return(
<Document className="pdfContainer">

  <Page size="A5" style={styles.pdfPageTwo}>
  <Image src={testimage} style={styles.pdfPageTwoBackground} / >

  {/* <Text style={styles.header} fixed>
      ~ Created with react-pdf ~
    </Text> */}
  
   <View style={styles.section}>

      
          {/* <Text  style={styles.pdfPageTwoShowcase}>
              SHOWCASE!
          </Text> */}
          
          <Text  style={styles.pdfPageTwoTop}>
          {this.props.artistName} 
          </Text>
          
          

          <Text  style={styles.pdfPageTwoMiddle}>
          {this.props.showDate}
          </Text>
      
              
          <Text style={styles.pdfPageTwoBottom}>
          {this.props.venue}
          </Text>

  </View>

  </Page>
</Document>  
    )
}
}
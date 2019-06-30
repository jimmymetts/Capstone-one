import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image, Font  } from '@react-pdf/renderer';
import testimage from './Images/black-concrete.jpg'
// import testimage from './Images/Abomb.png'
import JacquesFont from './Fonts/JacquesFrancoisShadow-Regular.ttf'


Font.register({
    family: 'Jacques Francois Shadow',
    src: JacquesFont
  });


const styles = StyleSheet.create({

    pdfPageOne: {
      flexDirection: 'row',
      backgroundColor: 'black',
      alignContent: 'spaceBetween',
        
    },
    pdfPageOneBackground:{                    /* placement of background image */
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        display: 'block',
        height: '100%',
        width: '100%'
    },

    pdfPageOneSection: {
      margin: 50,   /* targets outside */
      padding: 10,  /* will push Showcase down/up */
      flexGrow: 10,
      border:5,
      borderColor: 'white',
      borderRadius: 30,
    },
    
    // sectionOne: {    /* border for top line of text */
    //     margin: 50,                     /* targets outside */
    //     padding: 10,                   /* will push Showcase down/up */
    //     flexGrow: 0,
    //     border:5,
    //     borderColor: 'white',
    //     borderRadius: 0,
    //   },

    // pdfPageOnetext: {
    //     fontSize:'30',
    //     color:'white',
    //     textAlign:'center',
    //     margin:-10,
    //     marginTop:100,
    //     fontFamily: 'Jacques Francois Shadow'
    // },
    pdfPageOneTop: {
        fontSize:'42',
        color:'white',
        textAlign:'center',
        margin:0,
        marginTop:110,  /* will push all 3 text lines down at the same time */
        fontFamily: 'Jacques Francois Shadow'
    },

    pdfPageOneMiddle: {
        fontSize:'26',
        color:'white',
        textAlign:'center',
        margin:25,
        marginTop:60,
        fontFamily: 'Jacques Francois Shadow'
    },
    pdfPageOneBottom: {
        fontSize:'26',
        color:'white',
        textAlign:'center',
        margin:25,
        marginTop:50,
        fontFamily: 'Jacques Francois Shadow'
    },
    pdfPageOneShowcase: {
        fontSize:'38',
        color:'white',
        textAlign:'center',
        marginTop:-60,  /* moves "showcase up/down" */
        fontFamily: 'Jacques Francois Shadow'
    },
    // textBorder: {
    //    border:5,
    //    borderColor: 'white',
    // },
  });
  

export default class ReactPDFPageOne extends Component {

    render = () => {
      return(
  <Document className="pdfContainer">

    <Page size="A5" style={styles.pdfPageOne}>
    <Image src={testimage} style={styles.pdfPageOneBackground} / >

    {/* <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text> */}
    
     <View style={styles.pdfPageOneSection}>

        
            <Text  style={styles.pdfPageOneShowcase}>
                SHOWCASE!
            </Text>
            
            <Text  style={styles.pdfPageOneTop}>
            {this.props.artistName} 
            </Text>
            
            

            <Text  style={styles.pdfPageOneMiddle}>
            {this.props.showDate}
            </Text>
        
                
            <Text style={styles.pdfPageOneBottom}>
            {this.props.venue}
            </Text>

    </View>

    </Page>
  </Document>  
      )
  }
}


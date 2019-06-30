import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image, Font  } from '@react-pdf/renderer';
// import testimage from './Images/PdfTest.jpeg'
// import testimage from './Images/Abomb.png'
import testimage from './Images/vector-retro-style.jpg'
// import JacquesFont from './Fonts/JacquesFrancoisShadow-Regular.ttf'
// import ShrikhandRegular from './Fonts/Shrikhand-Regular.ttf'
import Retrotype from './Fonts/KeepOnTruckin.TTF'


Font.register({
    family: 'Retrotype',
    src: Retrotype
  });


const styles = StyleSheet.create({

    pdfPageFour: {
      flexDirection: 'row',
      backgroundColor: '#8F1919',
      alignContent: 'spaceBetween',
        
    },
    pdfPageFourPageBackground:{                    /* placement of background image */
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        display: 'block',
        height: '100%',
        marginRight:20,
      marginLeft: -20,
        // width: '100%',
        width: 460,
        // '@media max-width: 400': {
        //   width: 900,
        // },
        // '@media orientation: landscape': {
        //   width: 800,
        // },
    },

    // pdfContainer: {
    //   width: 200,
    //   '@media max-width: 400': {
    //     width: 300,
    //   },
    //   '@media orientation: landscape': {
    //     width: 400,
    //   },
    // },

    pdfPageFourSection: {
      marginTop: 60,       /* targets outside */      
      marginBottom: 100,
      marginRight:20,
      marginLeft: 20,
      padding: 10,  /* will push Showcase down/up */
      flexGrow: 10
      // border:7,
      // borderColor: '#8F1919',
      // borderRadius: 30,
    },
    
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
    //     color:'white',
    //     textAlign:'center',
    //     margin:-10,
    //     marginTop:100,
    //     fontFamily: 'AmazingKids'
    // },
    pdfPageFourTop: {
        fontSize:'42',
        color:'#E84F11',
        textAlign:'center',
        margin:0,
        marginTop:110,  /* will push all 3 text lines down at the same time */
        fontFamily: 'Retrotype'
    },

    pdfPageFourMiddle: {
        fontSize:'32',
        color:'#E84F11',
        textAlign:'center',
        margin:25,
        marginTop:60,
        fontFamily: 'Retrotype'
    },
    pdfPageFourBottom: {
        fontSize:'32',
        color:'#E84F11',
        textAlign:'center',
        margin:25,
        marginTop:50,
        fontFamily: 'Retrotype'
    },
    pdfPageFourShowcase: {
        fontSize:'38',
        color:'#E84F11',
        textAlign:'center',
        marginTop:-30,  /* moves "showcase up/down" */
        fontFamily: 'Retrotype'
    },
    // textBorder: {
    //    border:5,
    //    borderColor: 'white',
    // },
  });
  

export default class ReactPDFPageFour extends Component {

    render = () => {
      return(
  <Document className="pdfContainer">

    <Page size="A5" style={styles.pdfPageFour}>
    <Image src={testimage} style={styles.pdfPageFourPageBackground} / >

    {/* <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text> */}
    
     <View style={styles.pdfPageFourSection}>

        
            <Text  style={styles.pdfPageFourShowcase}>
                SHOWCASE!
            </Text>
            
            <Text  style={styles.pdfPageFourTop}>
            {this.props.artistName} 
            </Text>
            
            

            <Text  style={styles.pdfPageFourMiddle}>
            {this.props.showDate}
            </Text>
        
                
            <Text style={styles.pdfPageFourBottom}>
            {this.props.venue}
            </Text>

    </View>

    </Page>
  </Document>  
      )
  }
}
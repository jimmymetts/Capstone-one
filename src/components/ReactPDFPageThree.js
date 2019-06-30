import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image, Font  } from '@react-pdf/renderer';
// import testimage from './Images/PdfTest.jpeg'
// import testimage from './Images/Abomb.png'
// import testimage from './Images/antBlack.jpeg'
// import testimage from './Images/grunge_bluegreen.jpg'
import testimage from './Images/decorative-grunge.jpg'
// import testimage from './Images/red-concrete.jpg'
// import JacquesFont from './Fonts/JacquesFrancoisShadow-Regular.ttf'
import ShortCut from './Fonts/SHORTCUT.TTF'



Font.register({
    family: 'SHORTCUT',
    src: ShortCut
  });
 
const styles = StyleSheet.create({

    pdfPageThree: {
      flexDirection: 'row',
      backgroundColor: 'white',
      alignContent: 'spaceBetween',
        
    },
    pdfPageThreeBackground:{   /* placement of background image */
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        display: 'block',
        height: '100%',
        width: '100%'
    },

    pdfPageThreeSection: {
      margin: 50,   /* targets outside */
      padding: 10,  /* will push Showcase down/up */
      flexGrow: 10,   
      // border:5,
      // borderColor: 'black',
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

    // text: {
    //     fontSize:'30',
    //     color:'White',
    //     textAlign:'center',
    //     margin:-10,
    //     marginTop:100,
    //     fontFamily: 'Times-Roman'
    // },
    pdfPageThreeTop: {
        fontSize:'38',
        color:'#969696',
        textAlign:'center',
        margin:0,
        marginTop:90,  /* will push all 3 text lines down at the same time */
        fontFamily: 'SHORTCUT'
        
    },

    pdfPageThreeMiddle: {
        fontSize:'26',
        color:'#969696',
        textAlign:'center',
        margin:25,
        marginTop:70,
        fontFamily: 'SHORTCUT'
    },
    pdfPageThreeBottom: {
        fontSize:'26',
        color:'#969696',
        textAlign:'center',
        margin:25,
        marginTop:50,
        fontFamily: 'SHORTCUT'
    },
    showcase: {
        fontSize:'40',
        color:'#969696',
        textAlign:'center',
        marginTop:10,  /* moves "showcase up/down" */
        fontFamily: 'SHORTCUT'
    },
    // textBorder: {
    //    border:5,
    //    borderColor: 'white',
    // },
  });
  

export default class ReactPDFPageThree extends Component {

    render = () => {
      return(
  <Document className="pdfContainer">

    <Page size="A5" style={styles.pdfPageThree}>
    <Image src={testimage} style={styles.pdfPageThreeBackground} / >

    {/* <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text> */}
    
     <View style={styles.pdfPageThreeSection}>

        
            <Text  style={styles.showcase}>
                SHOWCASE!
            </Text>
            
            <Text  style={styles.pdfPageThreeTop}>
            {this.props.artistName} 
            </Text>
            
            

            <Text  style={styles.pdfPageThreeMiddle}>
            {this.props.showDate}
            </Text>
        
                
            <Text style={styles.pdfPageThreeBottom}>
            {this.props.venue}
            </Text>

    </View>

    </Page>
  </Document>  
      )
  }
}
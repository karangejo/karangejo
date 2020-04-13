import React from 'react'
import {Grid} from '@material-ui/core';
import AnimatedImage from './animatedImage';
import shell1 from '../images/shells/shell1.png';
import shell2 from '../images/shells/shell3.png';
import shell3 from '../images/shells/shell5.png';
import shell4 from '../images/shells/shell7.png';
import shell5 from '../images/shells/shell9.png';
import shell6 from '../images/shells/shell11.png';
import shell7 from '../images/shells/shell13.png';
import shell8 from '../images/shells/shell15.png';
import shell9 from '../images/shells/shell17.png';
import shell10 from '../images/shells/shell19.png';



function ShellsLeft(props){
    const imgWidth = "3"   
      

    return(
              <Grid container direction="column" spacing={3} wrap="nowrap" justify="space-around" alignItems={props.alignItems} style={{height: "100%"}}>
                  <Grid item> 
                        <div style={{width: "4vw"}}/>
                        <AnimatedImage src={shell2} imgWidth={imgWidth} alt="a shell"/>                   
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={shell1} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={shell3} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={shell4} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={shell5} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
                  <Grid item> 
                      <AnimatedImage src={shell6} imgWidth={imgWidth} alt="a shell"/>               
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={shell7} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={shell8} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={shell9} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={shell10} imgWidth={imgWidth} alt="a shell"/>
                  </Grid>
              </Grid>      
      )
        
      }

export default ShellsLeft


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
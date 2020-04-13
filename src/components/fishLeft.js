import React from 'react'
import {Grid} from '@material-ui/core';
import AnimatedImage from './animatedImage';
import fish8 from '../images/fish/fish8.png';
import fish9 from '../images/fish/fish9.png';
import fish10 from '../images/fish/fish10.png';
import fish11 from '../images/fish/fish11.png';
import fish12 from '../images/fish/fish12.png';
import fish13 from '../images/fish/fish13.png';
import fish14 from '../images/fish/fish14.png';
import fish15 from '../images/fish/fish15.png';






function Fish(props){
    const imgWidth = "7"   
      

    return(
              <Grid container direction="column" wrap="nowrap" spacing={1} justify="space-around" alignItems={props.alignItems} style={{height: "100%"}}>
                  <Grid item> 
                     <div style={{width: "8vw"}}/>                 
                      <AnimatedImage src={fish8} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item> 
                      <AnimatedImage src={fish9} imgWidth={imgWidth} alt="a fish"/>               
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish10} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish11} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish12} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish13} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish14} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish15} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
              </Grid>      
      )
        
      }

export default Fish


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
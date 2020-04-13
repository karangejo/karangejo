import React from 'react'
import {Grid} from '@material-ui/core';
import AnimatedImage from './animatedImage';
import fish1 from '../images/fish/fish1.png';
import fish2 from '../images/fish/fish2.png';
import fish3 from '../images/fish/fish3.png';
import fish4 from '../images/fish/fish4.png';
import fish5 from '../images/fish/fish5.png';
import fish6 from '../images/fish/fish6.png';
import fish7 from '../images/fish/fish7.png';




function FishRight(props){
    const imgWidth = "7"   
      

    return(
              <Grid container direction="column" wrap="nowrap" spacing={1} justify="space-around" alignItems={props.alignItems} style={{height: "100%"}}>
                  <Grid item> 
                     <div style={{width: "8vw"}}/>                 
                     <AnimatedImage src={fish2} imgWidth={imgWidth} alt="a fish"/> 
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={fish1} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={fish3} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish4} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={fish5} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
                  <Grid item> 
                      <AnimatedImage src={fish6} imgWidth={imgWidth} alt="a fish"/>               
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={fish7} imgWidth={imgWidth} alt="a fish"/>
                  </Grid>
              </Grid>      
      )
        
      }

export default FishRight


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
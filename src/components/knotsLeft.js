import React from 'react'
import {Grid} from '@material-ui/core';
import AnimatedImage from './animatedImage';
import knot1 from '../images/knots/knot1.png';
import knot2 from '../images/knots/knot2.png';
import knot3 from '../images/knots/knot3.png';
import knot4 from '../images/knots/knot4.png';
import knot5 from '../images/knots/knot5.png';
import knot6 from '../images/knots/knot6.png';
import knot7 from '../images/knots/knot7.png';
import knot8 from '../images/knots/knot8.png';
import knot9 from '../images/knots/knot9.png';
import knot10 from '../images/knots/knot10.png';
import knot11 from '../images/knots/knot21.png';



function KnotsLeft(){
    const imgWidth = "3"   
      

    return(
              <Grid container direction="column" wrap="nowrap" spacing={3} justify="space-around" alignItems="flex-end" style={{height: "100%"}}>
                  <Grid item> 
                        <div style={{width: "4vw"}}/>
                        <AnimatedImage src={knot2} imgWidth={imgWidth} alt="a knot"/>                   
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={knot1} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={knot3} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={knot4} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={knot5} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item> 
                      <AnimatedImage src={knot6} imgWidth={imgWidth} alt="a knot"/>               
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={knot7} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={knot8} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={knot9} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={knot10} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={knot11} imgWidth={imgWidth} alt="a knot"/>
                  </Grid>
              </Grid>      
      )
        
      }

export default KnotsLeft


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
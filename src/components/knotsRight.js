import React from 'react'
import {Grid} from '@material-ui/core';
import AnimatedImage from './animatedImage';
import knot1 from '../images/knots/knot11.png';
import knot2 from '../images/knots/knot12.png';
import knot3 from '../images/knots/knot13.png';
import knot4 from '../images/knots/knot14.png';
import knot5 from '../images/knots/knot15.png';
import knot6 from '../images/knots/knot16.png';
import knot7 from '../images/knots/knot17.png';
import knot8 from '../images/knots/knot18.png';
import knot9 from '../images/knots/knot19.png';
import knot10 from '../images/knots/knot20.png';


function KnotsRight(){
    const imgWidth = "3"   
      

    return(
              <Grid container direction="column" spacing={3} wrap="nowrap" justify="space-around" alignItems="flex-start" style={{height: "100%"}}>             
                  <Grid item>
                       <div style={{width: "4vw"}}>
                           <AnimatedImage src={knot1} imgWidth={imgWidth} alt="a knot"/>
                       </div>
                  </Grid>
                  <Grid item> 
                      <AnimatedImage src={knot2} imgWidth={imgWidth} alt="a knot"/>               
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
            </Grid>
                  
      )
        
      }

export default KnotsRight;


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
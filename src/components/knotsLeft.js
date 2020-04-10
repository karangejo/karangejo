import React, { useState } from 'react'
import {Grid} from '@material-ui/core';
import {useSpring, animated, config } from 'react-spring'
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
    const {opacity} = useSpring({config: config.slow, opacity: 1, from: {opacity: 0}})
    const imgWidth = "3vw"   
      

    return(
              <Grid container direction="column" spacing={3} justify="center" alignItems="flex-start">
                  <Grid item>
                      <animated.img src={knot1} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item> 
                      <animated.img src={knot2} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>               
                  </Grid>
                  <Grid item>
                      <animated.img src={knot3} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <animated.img src={knot4} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item>
                      <animated.img src={knot5} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item> 
                      <animated.img src={knot6} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>               
                  </Grid>
                  <Grid item>
                      <animated.img src={knot7} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <animated.img src={knot8} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <animated.img src={knot9} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <animated.img src={knot10} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
                  <Grid item>
                        <animated.img src={knot11} style={{height:'auto',width:imgWidth, opacity: opacity}} alt="a knot"/>
                  </Grid>
              </Grid>      
      )
        
      }

export default KnotsLeft


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
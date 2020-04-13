import React, { useState } from 'react'
import Navbar from '../components/navbar';
import {Grid} from '@material-ui/core';
import {useSpring, animated, config } from 'react-spring'
import * as easings from 'd3-ease'
import {MoonPhase, PhaseText} from 'moonphases-react'
import Cloud from '../images/clouds/cloud1.png';

function Layout(props){
      const [moonHovered, setMoonHovered] = useState(false);
      const {opacity, imageWidth} = useSpring({config: config.slow, to: {opacity: 1, imageWidth: props.imageWidth}, from: {opacity: 0, imageWidth: "1vw"}});
      const moonProps = useSpring({config: config.slow, opacity: moonHovered ? 1 : 0.7});
      const moonTextProps = useSpring({config: config.slow, opacity: moonHovered ? 1 : 0});
      // this needs some work
      const cloudProps = useSpring({config: { duration: 6000, easing: easings.easeCubic }, to: {transform: "translateX(2000px)", position: "inherit"}, from:{transform: "translateX(-1000px)", position: "absolute"}});

      const enteredMoon = () => {
            console.log("entered moon")
            setMoonHovered(true);
      }
      const leftMoon = () => {
            setMoonHovered(false);
      }

      // animated.img needs some work too...

      return(
            <div style={{background: "radial-gradient(circle, rgba(254,251,234,1) 50%, rgba(0,100,158,1) 100%)", paddingTop: "20px"}}>
                  <animated.img src={Cloud} style={cloudProps}/>
                  <Grid container direction="row" wrap="nowrap" spacing={4} justify="center" >
                        <Grid item xs>
                              <animated.div style={{opacity: opacity, height: "100%"}}>
                                    {props.borderLeft}
                              </animated.div>
                        </Grid>
                        <Grid item >
                              <Grid container direction="column" wrap="nowrap" spacing={4} justify="center" alignItems="center">
                                    
                                    <Grid item>
                                          <Navbar/>
                                    </Grid>
                                    
                                    <Grid item>
                                    
                                                      <Grid container direction="column" spacing={1} justify="space-evenly" alignItems="center">
                                                            <Grid item>
                                                                  <div style={{width: "65vw"}}/>
                                                            </Grid>
                                                            <Grid item> 
                                                                  <animated.div style={moonProps} onMouseEnter={enteredMoon} onMouseLeave={leftMoon}>
                                                                        <MoonPhase />
                                                                  </animated.div>
                                                            </Grid>
                                                            <Grid item>
                                                                  <animated.div style={moonTextProps}>
                                                                        <PhaseText fontFamily="Fredericka the Great"/>
                                                                  </animated.div>
                                                            </Grid>
                                                            
                                                            <Grid item>
                                                                  <animated.div style={{opacity: opacity, padding: "20px 20px 20px 20px"}}>
                                                                        {props.children}
                                                                  </animated.div>
                                                            </Grid>
                                                            
                                                            <Grid item>
                                                                  <animated.img src={props.boatImage} style={{height:'auto',width: imageWidth, opacity: opacity}} alt="a sailboat"/>
                                                            </Grid>
                                          
                                                      </Grid>
                                    </Grid>
                                    <Grid item>
                                          <Navbar/>
                                    </Grid>
                              </Grid>
                        </Grid>
                        <Grid item xs>
                              <animated.div style={{opacity: opacity, height: "100%"}}>
                                    {props.borderRight}
                              </animated.div>
                        </Grid>
                  </Grid>      
      </div>
      )
        
      }

export default Layout;


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
import React, { useState } from 'react'
import Navbar from '../components/navbar';
import {Grid} from '@material-ui/core';
import {useSpring, animated, config } from 'react-spring'
import MoonPhase from 'moonphases-react'
import KnotsLeft from '../components/knotsLeft';
import KnotsRight from '../components/knotsRight';

function Layout(props){
      const [moonHovered, setMoonHovered] = useState(false);
      const {opacity, imageWidth} = useSpring({config: config.slow, to: {opacity: 1, imageWidth: props.imageWidth}, from: {opacity: 0, imageWidth: "1vw"}})
      const moonProps = useSpring({config: config.slow, opacity: moonHovered ? 1 : 0.7})
     

      const enteredMoon = () => {
            console.log("entered moon")
            setMoonHovered(true);
      }
      const leftMoon = () => {
            setMoonHovered(false);
      }

      return(
            <div style={{background: "linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)"}}>
                  <Grid container direction="column" spacing={4} justify="center" alignItems="center">
                        
                        <Grid item>
                              <Navbar/>
                        </Grid>
                        
                        <Grid item>
                              <Grid container direction="row" wrap="nowrap" spacing={4} justify="center" alignItems="end">
                                   <Grid item xs>
                                         <KnotsLeft/>
                                   </Grid>
                                    <Grid item xs>
                                          <Grid container direction="column" spacing={4} justify="space-evenly" alignItems="center">
                                                <Grid item>
                                                      <div style={{width: "72vw"}}/>
                                                </Grid>
                                                <Grid item> 
                                                      <animated.div style={moonProps} onMouseEnter={enteredMoon} onMouseLeave={leftMoon}>
                                                            <MoonPhase />
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
                                    <Grid item xs>
                                         <KnotsRight/>
                                   </Grid>
                              </Grid>

                              
                        </Grid>
                        
                        <Grid item>
                              <Navbar/>
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
import React, { useState } from 'react'
import Navbar from '../components/navbar';
import {Grid} from '@material-ui/core';
import {useSpring, animated, config } from 'react-spring'
import MoonPhase from 'moonphases-react'
import Boat from '../images/boat-1297127.png';

function Code(){
      const [moonHovered, setMoonHovered] = useState(false);
      const {opacity} = useSpring({config: config.slow, opacity: 1, from: {opacity: 0}})
      const moonProps = useSpring({opacity: moonHovered ? 0.5 : 1})
     

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
                        <animated.div style={moonProps} onMouseEnter={enteredMoon} onMouseLeave={leftMoon}>
                              <MoonPhase />
                        </animated.div>
                  </Grid>
                  <Grid item>
                    <animated.div style={{opacity: opacity}}>
                         <h2>
                            Code
                        </h2>
                      </animated.div>
                  </Grid>
                  <Grid item>
                        <animated.img src={Boat} style={{height:'auto',width:'45vw', opacity: opacity}} alt="a sailboat"/>
                  </Grid>
                  <Grid item>
                          <Navbar/>
                  </Grid>
              </Grid>      
      </div>
      )
        
      }

export default Code


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
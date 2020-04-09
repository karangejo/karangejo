import React from 'react'
import Navbar from '../components/navbar';
import {Grid} from '@material-ui/core';
import {useSpring, animated } from 'react-spring'
import MoonPhase from 'moonphases-react'
import Boat from '../images/boat-1297127.png';

function Home(){
      const props = useSpring({opacity: 1, from: {opacity: 0}})

      return(
            <div style={{ background: "linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)"}}>
              <Grid container direction="column" spacing={4} justify="center" alignItems="center">
                  <Grid item>
                          <Navbar/>
                  </Grid>
                  <Grid item>
                              <animated.div style={props}>
                                    <MoonPhase/>
                              </animated.div>
                  </Grid>
                  <Grid item>
                        <h2>
                              Some really cool text!
                        </h2>
                  </Grid>
                  <Grid item>
                        <img src={Boat} style={{height:'auto',width:'45vw'}} alt="a sailboat"/>
                  </Grid>
                  <Grid item>
                          <Navbar/>
                  </Grid>
              </Grid>      
      </div>
      )
        
      }

export default Home


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
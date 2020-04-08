import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar';
import {Grid} from '@material-ui/core';
import {useSpring, animated, interpolate} from 'react-spring'
import MoonPhase from 'moonphases-react'
import Boat from '../images/boat-1297127.png';
import useInterval from '../utils/useInterval';

function Home(){
      const [opacity, setOpacity] = useState(0);
      useInterval(() => {
            setOpacity(opacity+0.1);
      },100)
      
       useEffect(() => {
             console.log(Math.sin(opacity));
       },[opacity])
      return(
            <div style={{ background: "linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)"}}>
              <Grid container direction="column" spacing={4} justify="center" alignItems="center">
                  <Grid item>
                          <Navbar/>
                  </Grid>
                  <Grid item>
                              <animated.div style={{opacity: Math.sin(opacity)}}>
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



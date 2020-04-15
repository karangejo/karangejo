import React, { useState } from 'react'
import {useSpring, animated, config } from 'react-spring'
import {MoonPhase, PhaseText} from 'moonphases-react'
import { Grid } from '@material-ui/core';


function AnimatedMoonPhase(){
      const [moonHovered, setMoonHovered] = useState(false);
      const moonProps = useSpring({config: config.slow, opacity: moonHovered ? 1 : 0.7});
      const moonTextProps = useSpring({config: config.slow, opacity: moonHovered ? 1 : 0});

      const enteredMoon = () => {
            setMoonHovered(true);
      }
      const leftMoon = () => {
            setMoonHovered(false);
      }

      return(
           <Grid container direction="column" justify="center" alignItems="center">
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
           </Grid>                    
      )
        
      }

export default AnimatedMoonPhase;


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
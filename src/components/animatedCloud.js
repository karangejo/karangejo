import React, { useState } from 'react'
import {useSpring, animated } from 'react-spring'
import * as easings from 'd3-ease'
import useInterval from '../utils/useInterval';

function AnimatedCloud(props){
      const [resetCloud, setResetCloud] = useState(true);
      
      useInterval(() => {
            setResetCloud(!resetCloud);
      },props.duration/2) 
      
      const cloudProps = useSpring({
            config: { duration: props.duration, easing: easings.easeLinear }, 
            reset: resetCloud,
            to: {transform: "translateX(100vw)", position: "absolute", height:'auto',width: props.imgWidth, opacity: props.opacity, top: props.top}, 
            from:{transform: `translateX(${props.translateFrom})`, position: "absolute", height:'auto',width: props.imgWidth, opacity: props.opacity, top: props.top}
      });


      return(
                  <animated.img src={props.cloudImage} style={cloudProps}/>
      )
        
      }

export default AnimatedCloud;


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
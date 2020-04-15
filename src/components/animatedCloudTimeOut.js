import React, { useState, useEffect } from 'react';
import AnimatedCloud from './animatedCloud';

function AnimatedCloudTimeout(props){
     const [render, setRender] = useState(false);
     
     useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, props.timeout)
     },[props.timeout])
     

     const cloud = () => {
         if(render){
            return(
                <AnimatedCloud cloudImage={props.cloudImage} imgWidth={props.imgWidth} opacity={props.opacity} top={props.top} duration={props.duration} translateFrom={props.translateFrom}/>
             )
         } else {
             return(null);
         }     
     }

      return(
            cloud()
      )
        
}

export default AnimatedCloudTimeout;



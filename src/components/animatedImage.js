import React, { useState } from 'react'
import {useSpring, animated, config } from 'react-spring'



function AnimatedImage(props){
    const [imageHovered, setImageHovered] = useState(false);
    const {opacity} = useSpring({config: config.slow, opacity: imageHovered ? 1 : 0.7})
    const {width} = useSpring({config: config.slow, width: imageHovered ? "3.5vw" : "3vw"})
      
      
    const enteredImage = () => {
        setImageHovered(true);
    }
    const leftImage = () => {
        setImageHovered(false);
    }

    return(      
        <animated.img 
            onMouseEnter={enteredImage}
            onMouseLeave={leftImage}
            src={props.src} 
            style={{height:'auto',width: width, opacity: opacity}} 
            alt="a knot"
        />          
    )
}

export default AnimatedImage



import React from 'react'
import {Grid} from '@material-ui/core';
import AnimatedImage from './animatedImage';
import celtic1 from '../images/celtic/celtic1.png';
import celtic2 from '../images/celtic/celtic3.png';
import celtic3 from '../images/celtic/celtic5.png';
import celtic4 from '../images/celtic/celtic7.png';
import celtic5 from '../images/celtic/celtic9.png';
import celtic6 from '../images/celtic/celtic11.png';
import celtic7 from '../images/celtic/celtic13.png';
import celtic8 from '../images/celtic/celtic15.png';
import celtic9 from '../images/celtic/celtic17.png';
import celtic10 from '../images/celtic/celtic19.png';



function CelticLeft(props){
    const imgWidth = "5"   
      

    return(
              <Grid container direction="column" wrap="nowrap" spacing={3} justify="space-around" alignItems={props.alignItems} style={{height: "100%"}}>
                  <Grid item> 
                        <div style={{width: "6vw"}}/>
                        <AnimatedImage src={celtic2} imgWidth={imgWidth} alt="a celtic"/>                   
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={celtic1} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={celtic3} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={celtic4} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={celtic5} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
                  <Grid item> 
                      <AnimatedImage src={celtic6} imgWidth={imgWidth} alt="a celtic"/>               
                  </Grid>
                  <Grid item>
                      <AnimatedImage src={celtic7} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={celtic8} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={celtic9} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
                  <Grid item>
                        <AnimatedImage src={celtic10} imgWidth={imgWidth} alt="a celtic"/>
                  </Grid>
              </Grid>      
      )
        
      }

export default CelticLeft


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
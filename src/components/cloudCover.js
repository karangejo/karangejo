import React from 'react'
import AnimatedCloudTimeout from './animatedCloudTimeOut';
import Cloud from '../images/clouds/cloud4.png';
import Cloud1 from '../images/clouds/cloud5.png';
import Cloud2 from '../images/clouds/cloud6.png';
import Cloud3 from '../images/clouds/cloud7.png';
import Cloud4 from '../images/clouds/cloud8.png';


function CloudCover(){
      
      const cloudOpacity = "0.3";
      const cloudDuration = 20000;
     

      return(
            <div>
                 <AnimatedCloudTimeout timeout={2000}  cloudImage={Cloud} imgWidth="7vw" opacity={cloudOpacity} top="25vh" duration={cloudDuration} translateFrom="-10vw" />
                 <AnimatedCloudTimeout timeout={6000}  cloudImage={Cloud1} imgWidth="7vw" opacity={cloudOpacity} top="29vh" duration={cloudDuration} translateFrom="-10vw" />
                 <AnimatedCloudTimeout timeout={10000}  cloudImage={Cloud2} imgWidth="7vw" opacity={cloudOpacity} top="27vh" duration={cloudDuration} translateFrom="-10vw" />
                 <AnimatedCloudTimeout timeout={14000}  cloudImage={Cloud3} imgWidth="7vw" opacity={cloudOpacity} top="26vh" duration={cloudDuration} translateFrom="-10vw" />
                 <AnimatedCloudTimeout timeout={18000}  cloudImage={Cloud4} imgWidth="10vw" opacity={cloudOpacity} top="29vh" duration={cloudDuration} translateFrom="-10vw" />
            </div>
      )
        
      }

export default CloudCover;


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
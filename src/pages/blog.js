import React from 'react'
import Layout from '../components/layout';
import Boat from '../images/boat-2027004.png';
import FishRight from '../components/fishRight';
import FishLeft from '../components/fishLeft';

function Blog(){
   

      return(
      <Layout boatImage={Boat} imageWidth="35vw" borderLeft={<FishLeft alignItems="flex-end"/>} borderRight={<FishRight alignItems="flex-start"/>}>
                  <h1>
                        Blog
                  </h1>
            </Layout>
      )
        
      }

export default Blog

import React from 'react'
import Layout from '../components/layout';
import Boat from '../images/boat-2027004.png';

function Blog(){
   

      return(
            <Layout boatImage={Boat} imageWidth="35vw">
                  <h1>
                        Blog
                  </h1>
            </Layout>
      )
        
      }

export default Blog

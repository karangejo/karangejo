import React from 'react'
import Layout from '../components/layout';
import Boat from '../images/boat-1297127.png';

function Home(){
   

      return(
            <Layout boatImage={Boat} imageWidth="35vw">
                  <h1>
                        Home
                  </h1>
            </Layout>
      )
        
      }

export default Home

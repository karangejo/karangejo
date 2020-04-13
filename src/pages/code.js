import React from 'react'
import Layout from '../components/layout';
import Boat from '../images/battleship.png';
import CelticRight from '../components/celticRight';
import CelticLeft from '../components/celticLeft';

function Code(){
   

      return(
            <Layout boatImage={Boat} imageWidth="35vw" borderRight={<CelticRight alignItems="flex-start"/>} borderLeft={<CelticLeft alignItems="flex-end"/>}>
                  <h1>
                        Code
                  </h1>
            </Layout>
      )
        
      }

export default Code

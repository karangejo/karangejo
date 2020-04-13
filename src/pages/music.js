import React from 'react'
import Layout from '../components/layout';
import Boat from '../images/boat-1298033.png';
import ShellsRight from '../components/shellsRight';
import ShellsLeft from '../components/shellsLeft';

function Music(){
   

      return(
            <Layout boatImage={Boat} imageWidth="35vw" borderRight={<ShellsRight alignItems="flex-start"/>} borderLeft={<ShellsLeft alignItems="flex-end"/>}>
                  <h1>
                        Music
                  </h1>
            </Layout>
      )
        
      }

export default Music

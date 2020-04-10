import React from 'react'
import {Grid} from '@material-ui/core';
import Layout from '../components/layout';
import Boat from '../images/boat-1297127.png';

function Home(){
   

      return(
            <Layout boatImage={Boat} imageWidth="35vw">
                  <Grid container direction="column" justify="center" alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                        <Grid item>
                              <h1>
                                    Home
                              </h1>
                        </Grid>
                        <Grid item>
                              <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </p>
                        </Grid>
                  </Grid>
            </Layout>
      )
        
      }

export default Home


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
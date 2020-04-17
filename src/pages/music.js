import React from 'react'
import {Grid} from '@material-ui/core';
import Layout from '../components/layout';
import Boat from '../images/boat-1298033.png';
import ShellsRight from '../components/shellsRight';
import ShellsLeft from '../components/shellsLeft';

function Music(){
   

      return(
            <Layout boatImage={Boat} imageWidth="35vw" borderRight={<ShellsRight alignItems="flex-start"/>} borderLeft={<ShellsLeft alignItems="flex-end"/>}>
                  <Grid container direction="column" justify="center" alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px", width: "60vw"}}>
                        <Grid item>
                              <h1>
                                     Music
                              </h1>
                        </Grid>
                        <Grid item style={{alignSelf: "stretch"}}>
                               <iframe title="slow train" width="100%" height="166" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/799808188&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                        </Grid>
                  </Grid>
            </Layout>
      )
        
      }

export default Music

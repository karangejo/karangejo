import React, {useState} from 'react'
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import Boat from '../images/boat-1297127.png';
import KnotsLeft from '../components/knotsLeft';
import KnotsRight from '../components/knotsRight';

function Admin(){
      const [markdownText, setMarkdownText] = useState('');
      const [preview, setPreview] = useState(false);

      const textChange = (event) => {
          setMarkdownText(event.currentTarget.value);
      }

      const displayPreview = () => {
            return(
                <ReactMarkdown source={markdownText}/>
            );
      }

      const changePreview = () => {
          setPreview(!preview);
      }

      return(
      <Layout boatImage={Boat} imageWidth="45vw" borderRight={<KnotsRight/>} borderLeft={<KnotsLeft/> }>
                  <Grid container direction="column" justify="center" spacing={2} alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px", width: "60vw"}}>
                        <Grid item>
                              <h1 align="center">
                                    Admin Panel
                              </h1>
                        </Grid>
                        <Grid item justifySelf="stretch">
                        <TextField
                            style={{width:"60vw", heigth: "auto"}}
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={30}
                            defaultValue="Markdown Editor"
                            variant="outlined"
                            onChange={textChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={changePreview}>
                                Preview
                            </Button>
                        </Grid>
                        <Grid item>   
                        {preview && displayPreview()}             
                        </Grid>
                  </Grid>
            </Layout>
      )
        
      }

export default Admin


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
import React, {useState} from 'react'
import {Grid} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Layout from '../components/layout';
import Boat from '../images/boat-1297127.png';
import KnotsLeft from '../components/knotsLeft';
import KnotsRight from '../components/knotsRight';

function Admin(){
      const [inputType, setInputType] = useState('');
      const [postObj, setPostObj] = useState({});
      const [inputBoxes, setInputBoxes] = useState({});
      
      const createInputBox = (postType) => {
          console.log("creating input box for the post type");
      }

      const handleChange = (event) => {
            const typeOfPost = event.target.value;
            setInputType(typeOfPost);
            createInputBox(typeOfPost);
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
                            <FormControl style={{width: "30vw"}}>
                                <InputLabel id="demo-customized-select-label">Input</InputLabel>
                                <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={inputType}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'text'}>Text</MenuItem>
                                <MenuItem value={'code'}>Code</MenuItem>
                                <MenuItem value={'image'}>Image</MenuItem>
                                </Select>
                            </FormControl>         
                        </Grid>
                        <Grid item>                
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
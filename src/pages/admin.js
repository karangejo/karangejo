import React, {useState, useEffect} from 'react'
import {Grid, Select, MenuItem, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import Boat from '../images/boat-1297127.png';
import KnotsLeft from '../components/knotsLeft';
import KnotsRight from '../components/knotsRight';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';


function Admin(){
      const [markdownText, setMarkdownText] = useState('');
      const [postName, setPostName] = useState('');
      const [postType, setPostType] = useState('');
      const [preview, setPreview] = useState(false);
      const [allPosts, setAllPosts] = useState([])
      const [pass, setPass] = useState({})
      const [loggedIn, setLoggedIn] = useState(false);


      const getPosts = async () => {
        const posts = await axios.get('http://localhost:3001/post');
        console.log(posts);
        setAllPosts(posts.data);
      }

      useEffect(() => {
          getPosts()
      },[])      

      const textChange = (event) => {
          setMarkdownText(event.currentTarget.value);
      }

      const displayPreview = () => {
            return(
                <ReactMarkdown source={markdownText} />
            );
      }

      const changePreview = () => {
          setPreview(!preview);
      }

      const handleChangePost = (event) => {
          setPostType(event.target.value);
      }

      const handleNameChange = (event) => {
        setPostName(event.currentTarget.value);
    }

      const validateInputs = () => {
          if(postName === '' || postType === '' || markdownText === ''){
              return(false);
          } else {
              return(true);
          }
      }

      const submitPost = () => {
          if(validateInputs()){
            const post = {name: postName, type: postType, date: new Date(), markdown: markdownText}
          
            axios.post('http://localhost:3001/post', post)
              .then((res) => {
                  console.log(res);
              })
              .catch((err) => {
                  console.log(err);
              })

              getPosts();

          } else {
              console.log('invalid inputs');
          }
          
      }

      
    
      const displayAllPosts = () => {
        const items = allPosts.map((item, key) => {
            return(
                <Paper key={key} style={{width: "25vw", background: "transparent"}}>
                    <Grid container direction="column" justify="center"  alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                        <Grid item>
                            <h2>{item.name}</h2>
                        </Grid>
                        <Grid item>
                            <p>{item.type}</p>
                        </Grid>
                        <Grid item>
                            <p>{item.date}</p>
                        </Grid>
                    </Grid>
                </Paper>
            )
        });
        return(items)
      }

      const loggedInView = () => {
          return(
                    <Grid container direction="column" justify="center" spacing={2} alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px", width: "60vw"}}>
                    <Grid item>
                        <h1 align="center">
                                Admin Panel
                        </h1>
                    </Grid>
                    <Grid item>
                    <TextField id="outlined-basic" label="Post Name" placeholder="" value="" variant="outlined" onChange={handleNameChange}/>

                    </Grid>
                    <Grid item>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={postType}
                            onChange={handleChangePost}
                            label="Type"
                            style={{width: "25vw"}}
                            >
                            <MenuItem value={"blog"}>Blog</MenuItem>
                            <MenuItem value={"code"}>Code</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item justifySelf="stretch">
                    <TextField
                        style={{width:"60vw", heigth: "auto"}}
                        id="outlined-multiline-static"
                        label="Markdown Post Editor"
                        multiline
                        rows={30}
                        defaultValue=""
                        variant="outlined"
                        onChange={textChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={changePreview}>
                            Preview
                        </Button>
                        <Button variant="contained" color="primary" onClick={submitPost}>
                            Post
                        </Button>
                    </Grid>
                    <Grid item style={{width: "60vw", overflow: "auto"}}>   
                    {preview && displayPreview()}             
                    </Grid>
                    <Grid item>
                        {displayAllPosts()}
                    </Grid>
            </Grid>

          )
      }

      const tryLogin = () => {
        axios.post('http://localhost:3001/login', {pass:pass})
            .then( (res) => {
                console.log(res);
                if(res.data.status === 1){
                    setLoggedIn(true);
                }
            })
            .catch( (err) => {
                console.log(err);
            })
      }

      const handlePassChange  = (event) => {
        const hash = sha256(event.currentTarget.value);
        setPass(hash.words);
     }

      const loginView = () => {
          return(
            <Grid container direction="column" justify="center" spacing={2} alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px", width: "60vw"}}>
                <Grid item>
                    <h1 align="center">
                            Admin Panel
                    </h1>
                </Grid>
                <Grid item>
          
                    <TextField id="standard-password-input" label="password" variant="outlined" type="password" onChange={handlePassChange}/>
                </Grid>
                <Grid item>
                        <Button variant="contained" color="primary" onClick={tryLogin}>
                            Login
                        </Button>        
                </Grid>
            </Grid>
          )
      }

      const checkLogin = () => {
          if(loggedIn){
              return(loggedInView())
          } else {
              return(loginView())
          }
      }

      return(
            <Layout boatImage={Boat} imageWidth="45vw" borderRight={<KnotsRight/>} borderLeft={<KnotsLeft/> }>
                {checkLogin()}            
            </Layout>
      )
        
      }

export default Admin


// white and blue 
//linear-gradient(90deg, rgba(152,193,217,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(152,193,217,1) 100%)
// white and yellow
//linear-gradient(90deg, rgba(236,223,149,1) 0%, rgba(254,251,234,1) 20%, rgba(254,251,234,1) 80%, rgba(236,223,149,1) 100%)
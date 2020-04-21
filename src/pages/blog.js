import React, {useState, useEffect} from 'react'
import {Grid, Paper} from '@material-ui/core';
import queryString from 'query-string';
import Layout from '../components/layout';
import Boat from '../images/boat-2027004.png';
import FishRight from '../components/fishRight';
import FishLeft from '../components/fishLeft';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import ReactMarkdown from 'react-markdown';



function Blog(props){
      const [postId, setPostId] = useState('');
      const [showAll, setShowAll] = useState(true);
      const [posts, setAllPosts] = useState([]);
      const [displayPost, setDisplayPost] = useState({})
      const [currentKey, setCurrentKey] = useState('');
      const history = useHistory();


      const getPosts =  () => {
            axios.get('http://localhost:3001/post')
                  .then((res) => {
                        setAllPosts(res.data);
                        console.log(res.data);
                  })
                  .catch((err) => {
                        console.log(err);
                  })
          }

      useEffect(() => {
            if(props.location.search){
                  setShowAll(false);
            } else {
                  setShowAll(true);
            }
      },[props.location.search, setPostId])

      useEffect(() => {
            getPosts()
      },[])

      const displayOnePost = () => {
            return(
                  <Grid container direction="column" justify="center"  alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                            <Grid item>
                                <h2>{displayPost.name}</h2>
                            </Grid>
                            <Grid item>
                                <ReactMarkdown source={displayPost.markdown}/>
                            </Grid>
                        </Grid>
            )

      }

      const goToPost = (id,key) => {
            setCurrentKey(key)
            setDisplayPost(posts[key])
            history.push('blog?postId='+id);
      }

      const displayAllPosts = () => {
            const items = posts.map((item, key) => {
                const itemId = item._id;
                return(
                    <Paper key={key} style={{width: "25vw", background: "transparent"}}  onClick={() => goToPost(itemId, key)}>
                        <Grid container direction="column" justify="center"  alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                            <Grid item>
                                <h2>{item.name}</h2>
                            </Grid>
                        </Grid>
                    </Paper>
                )
            });
            return(items)
          }
      

      return(
      <Layout boatImage={Boat} imageWidth="35vw" borderLeft={<FishLeft alignItems="flex-end"/>} borderRight={<FishRight alignItems="flex-start"/>}>
            <Grid container direction="column" justify="center" spacing={2} alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px", width: "60vw"}}>
                  <Grid item>
                        <h1 align="center">
                              Blog
                        </h1>
                  </Grid>
                  <Grid item>
                        {showAll ? displayAllPosts() : displayOnePost()}
                  </Grid>
            </Grid>
      </Layout>
      )
        
      }

export default Blog

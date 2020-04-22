import React, {useState, useEffect} from 'react'
import {Grid, Paper} from '@material-ui/core';
import Layout from '../components/layout';
import Boat from '../images/boat-2027004.png';
import FishRight from '../components/fishRight';
import FishLeft from '../components/fishLeft';
import axios from 'axios';
import { useHistory } from "react-router-dom";



function Blog(props){
      const [posts, setAllPosts] = useState([]);
      const history = useHistory();


      const getPosts =  () => {
            axios.get('http://localhost:3001/post')
                  .then((res) => {
                        setAllPosts(res.data);
                    //    console.log(res.data);
                  })
                  .catch((err) => {
                        console.log(err);
                  })
          }


      useEffect(() => {
            getPosts()
      },[])


      const goToPost = (id) => {
            history.push('post?postId='+id);
      }

      const displayAllPosts = () => {
            const items = posts.map((item, key) => {
                const itemId = item._id;
                return(
                    <Paper key={key} style={{width: "25vw", background: "transparent"}}  onClick={() => goToPost(itemId)}>
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
                        { displayAllPosts()}
                  </Grid>
            </Grid>
      </Layout>
      )
        
      }

export default Blog

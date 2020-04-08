import React, {useState} from 'react';
import {Grid, Paper} from '@material-ui/core';
import {CrabButton, LobsterButton, AnchorButton, ShellButton} from 'marine-ui-react';

const bkgCol = "#FEFBEA"
const btnSize = 1.1;

function Navbar(props) {
        
        const [paperElevation, setPaperElevation] = useState(3)

        const mouseEntered = () => {
                setPaperElevation(10);
        }
        const mouseLeft = () => {
                setPaperElevation(3);
        }
        return (        
                <Grid style={{padding: "10px 10px 10px 10px"}}>
                        <Paper onMouseLeave={mouseLeft} onMouseEnter={mouseEntered} elevation={paperElevation} style={{background: bkgCol, padding: "10px 10px 10px 10px", width: "80vw"}}>
<                               Grid container direction="row" spacing={2} alignItems="flex-end" justify="center">
                                        <Grid item>
                                                <AnchorButton text="Home" size={btnSize} backgroundColor={bkgCol}/>
                                        </Grid>
                                        <Grid item>
                                                <LobsterButton text="Code" size={btnSize} backgroundColor={bkgCol}/> 
                                        </Grid>
                                        <Grid item>
                                                 <CrabButton text="Blog" size={btnSize} backgroundColor={bkgCol}/>
                                        </Grid>
                                        <Grid item>
                                                <ShellButton text="Music" size={btnSize} backgroundColor={bkgCol}/>  
                                        </Grid>
                                </Grid>   
                        </Paper>    
                </Grid>                    
        );
};

export default Navbar;

//colors
// #FEFBEA cosmic latte
// #93B48B dark sea green
// #98C1D9 pale blue cerulean
// #BFACAA silver pink
// #130303 smoky black
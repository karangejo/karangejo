import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import {CrabButton, LobsterButton, AnchorButton, ShellButton} from 'marine-ui-react';

const navbar = props => {

        const bkgCol = "#FEFBEA"
        const btnSize = 1.1;
        return (        
                <Grid style={{padding: "10px 10px 10px 10px"}}>
                        <Paper elevation={10} style={{background: bkgCol, padding: "10px 10px 10px 10px", width: "80vw"}}>
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

export default navbar;

//colors
// #FEFBEA cosmic latte
// #93B48B dark sea green
// #98C1D9 pale blue cerulean
// #BFACAA silver pink
// #130303 smoky black
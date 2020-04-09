import React, {useState} from 'react';
import {Grid, Paper} from '@material-ui/core';
import {CrabButton, LobsterButton, AnchorButton, ShellButton} from 'marine-ui-react';


function Navbar(props) {
        const [paperElevation, setPaperElevation] = useState(3);
        const [lobsterFill, setLFill] = useState("#000");
        const [crabFill, setCFill] = useState("#000");
        const [shellFill, setSFill] = useState("#000");
        const [anchorFill, setAFill] = useState("#000")
        
        const hoveredCol = "#0c7fc2";
        const bkgCol = "#FEFBEA";
        const btnSize = 1.1;
        const font = "Fredericka the Great"
        const fontS = "13px"
      
        const mouseEntered = () => {
                setPaperElevation(10);
                
        }
        const mouseLeft = () => {
                setPaperElevation(3);
        }

        const enteredAButton = () => {
                setAFill(hoveredCol)
        }

        const leftAButton = () => {
                setAFill("#000")
        }
        const enteredLButton = () => {
                setLFill(hoveredCol)
        }

        const leftLButton = () => {
                setLFill("#000")
        }
        const enteredCButton = () => {
                setCFill(hoveredCol)
        }

        const leftCButton = () => {
                setCFill("#000")
        }
        const enteredSButton = () => {
                setSFill(hoveredCol)

        }

        const leftSButton = () => {
                setSFill("#000")
        }
        return (        
                <Grid style={{padding: "10px 10px 10px 10px"}}>
                        <Paper onMouseLeave={mouseLeft} onMouseEnter={mouseEntered} elevation={paperElevation} style={{background: bkgCol, padding: "10px 10px 10px 10px", width: "80vw"}}>
<                               Grid container direction="row" spacing={2} alignItems="flex-end" justify="center">
                                        <Grid item>       
                                               <AnchorButton fontSize={fontS} fontFamily={font} onMouseLeave={leftAButton} onMouseEnter={enteredAButton} size={btnSize} fill={anchorFill} fontColor={anchorFill} text="Home"  backgroundColor={bkgCol}/>
                                        </Grid>
                                        <Grid item>
                                                <LobsterButton fontSize={fontS} fontFamily={font} onMouseLeave={leftLButton} onMouseEnter={enteredLButton} size={btnSize} fill={lobsterFill} fontColor={lobsterFill} text="Code"  backgroundColor={bkgCol}/> 
                                        </Grid>
                                        <Grid item>
                                                 <CrabButton fontSize={fontS} fontFamily={font} onMouseLeave={leftCButton} onMouseEnter={enteredCButton} size={btnSize} fill={crabFill} fontColor={crabFill} text="Blog"  backgroundColor={bkgCol}/>
                                        </Grid>
                                        <Grid item>
                                                <ShellButton fontSize={fontS} fontFamily={font} onMouseLeave={leftSButton} onMouseEnter={enteredSButton} size={btnSize} fill={shellFill} fontColor={shellFill} text="Music"  backgroundColor={bkgCol}/>  
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
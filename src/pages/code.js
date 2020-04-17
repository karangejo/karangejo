import React from 'react'
import {Grid} from '@material-ui/core';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { duotoneSea as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Layout from '../components/layout';
import Boat from '../images/battleship.png';
import CelticRight from '../components/celticRight';
import CelticLeft from '../components/celticLeft';

function Code(){
      

      return(
            <Layout boatImage={Boat} imageWidth="35vw" borderRight={<CelticRight alignItems="flex-start"/>} borderLeft={<CelticLeft alignItems="flex-end"/>} >
                  <Grid container direction="column" justify="center" alignItems="center" style={{paddingRight: "10px", paddingLeft: "10px", width: "60vw"}}>
                        <Grid item>
                              <h1>
                                    Code
                              </h1>
                        </Grid>
                        <Grid item>
                            <h2 align="center">
                                  Please visit my <a href="https://github.com/karangejo">Github</a> page to see all of my projects. <br/>
                                  For all of you who live in Taiwan and surf, windsurf or kitesurf. You can check out my site <a href="https://taiwanbuoys.com">Taiwan Buoys.</a>
                            </h2>
                        </Grid>
                  </Grid>
            </Layout>
      )
        
      }

export default Code


/* code block

const codeString = 
      `import {useEffect, useRef } from 'react';

      function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }
      
      export default useInterval;`
       
      //and then display like this: 

      <SyntaxHighlighter className="code-block" language="javascript" style={codeStyle} wrapLines={true}>
            {codeString}
      </SyntaxHighlighter>
*/
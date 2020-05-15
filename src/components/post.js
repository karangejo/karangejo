import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeBlock";


function OnePost(props) {
    
   
    

  return <ReactMarkdown source={props.source} renderers={{code: CodeBlock}}/>;
}

export default OnePost;

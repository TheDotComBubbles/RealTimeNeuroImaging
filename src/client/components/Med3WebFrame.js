import React, { Component } from 'react';
import Iframe from 'react-iframe';

// ...
class Med3WebFrame extends Component {

  render() {

    return (
     <Iframe 
        url="http://www.youtube.com/embed/xDMP3i36naA"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        />
    );
  }
}

export default Med3WebFrame;

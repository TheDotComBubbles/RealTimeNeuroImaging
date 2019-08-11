import React, { Component } from 'react';
import Iframe from 'react-iframe';
import io from "socket.io-client";

var socket = io('http://localhost:3000');

class Med3WebFrame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: ""
    };

    this.imageChange = this.imageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
};

componentDidMount() {
    socket.on('news', function (data) {
        socket.emit('my other event', { my: 'data' });
      });
  
    socket.on("broadcast", (response) => {
        this.displayImage(response);
    });
};

imageChange(event) {
    this.setState({searchQuery: xss(event.target.value)});
}

submitQuery(event) {
    console.log("Query submitted");
}

handleSubmit(event) {
    event.preventDefault();
}

render() {
    return (

        <Iframe 
            url="\public\med3web\app\index.html"
            width="100%"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
        />
/*
        <div 
            id="med3web-container-3d" 
            //class="canvas-container col-xs-6 col-sm-6 col-md-8 col-lg-8" 
            align="center" 
            //style="display: none;"
        >
            <div 
                id="med3web-info"
            > 
            </div>
        </div>
        */
    )};
}


export default Med3WebFrame;

import React, { Component } from 'react';
import Iframe from 'react-iframe';

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
            url="/public/med3web/app/index.html"
            height="750"
            id="med3webIframe"
            display="initial"
            className="iframeSize"
            position="relative"
        />
    )};
}

export default Med3WebFrame;

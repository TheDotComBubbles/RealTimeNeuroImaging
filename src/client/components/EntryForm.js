import React from "react";
import io from "socket.io-client";
import ReactDOM from "react-dom";
import xss from "xss";

let messageDisplay = "";

var socket = io('http://localhost:3000');

class EntryForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            searchQuery: '',
            message: '',
            readOnly: false,
            imageURL: '',
            altImageText: ''
    };

        this.usernameChange = this.usernameChange.bind(this);
        this.searchQueryChange = this.searchQueryChange.bind(this)
        this.messageChange = this.messageChange.bind(this);
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
    }

    usernameChange(event) {
        this.setState({username: xss(event.target.value)});
    }

    searchQueryChange(event) {
        this.setState({searchQuery: xss(event.target.value)});
    }

    messageChange(event) {
        this.setState({message: xss(event.target.value)});
        messageDisplay = xss(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    submitQuery() {


        socket.emit('search', { 
            message: this.state.message,
            searchQuery: this.state.searchQuery,
            username: this.state.username
        });

                
        this.setState({
            message: '',
            searchQuery: '',
            readOnly: true
        });

    }

    displayImage = (results) => {

        let images = [];
        
        for (const [index, value] of results.searchResponse.entries()) {
            if(index==1) {
                images.push(
                    <div>
                        <a href="https://pixabay.com/">
                            <img 
                                className="image"
                                src={xss(value.url)}
                                alt={xss(value.alt)}
                                height="25px"
                            />
                        </a> 
                    </div> 
                )
            }
        };
        if(images.length == 0) {
            images.push(<p>"Sorry, your request did not return any images"</p>)
        }

        ReactDOM.render(
            <div id="RenderedHtml">
                <p>{results.username}</p>
                <p className="italics">{results.message}</p>
                {images}                 
            </div>,
            document.getElementById("outputDiv")
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">
                    Username: 
                    <input  
                        className="informationTextEntry" 
                        id="username"
                        name="style" 
                        type="text"
                        readOnly={this.state.readOnly}
                        value={this.state.username}
                        onChange={this.usernameChange} 
                    />
                </label>
                <div>
                    <button 
                        type="submit"
                        onClick={this.submitQuery}
                        >
                        Submit
                    </button>  
                </div>
            </form>
        ); 
    }
}

export default EntryForm;
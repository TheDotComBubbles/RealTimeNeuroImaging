import React from "react";
import Showdown from "showdown";
import ReactDOM from "react-dom";
import xss from "xss";

class MedFrame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: '',
            html: '',
            fileName: 'Enter a Filename'
            /*allowedTags: ["b", "i", "em", "strong", "a", "h1", "h2", "h3", "h4", "p"],
            allowedAttributes: {
                "h1": ("id"),
                "h2": ("id"),
                "a": ("href")
            }*/
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileNameChange = this.fileNameChange.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    fileNameChange(event) {
        this.state.fileName = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    convertToDoc = () => {

        let converter = new Showdown.Converter();
        let input = this.state.input;

        let html = converter.makeHtml(input);
        
        let sanitizedHtml = xss(html);

        let htmlPageDoc = '<!DOCTYPE html> ' + 
                        '<html lang="en"> ' +      
                            '<head>' +
                                '<style> '+
                                    'html {' +
                                    'padding: 5px;'+
                                    'max-width: 100%;'+
                                    'max-height: 100%;'+
                                    'background-color: white;'+
                                    '}'+
                                '</style>'+
                                '<title>HTML Generated From MD</title>' +
                            '</head>' +
                            '<body>' +
                                sanitizedHtml +
                            '</body>' +            
                        '</html>' 
        
        
        this.state = {
                        html: htmlPageDoc,
                        input: input
                    };
        return this.state.html;
    }

    convertToHtmlBlobAndDownload = () => {
        this.convertToBlobAndDownload('html');
    }

    convertToMdBlobAndDownload = () => {
        this.convertToBlobAndDownload('md');
    }

    convertToBlobAndDownload = (htmlOrMd) => {
        
        var text = "";
        
        if(htmlOrMd=="html") {
            text = this.state.html;
        }
        else {
            text = this.state.input;
        }

        var blob = new Blob([text]); 

        var blobUrl = URL.createObjectURL(blob);

        ReactDOM.render(
                <a href={blobUrl} 
                    download={this.state.fileName + '.' + htmlOrMd} 
                    id="fileURL">HTML Download
                </a>,
                document.getElementById("outputDivDownload")
            );
            
        setTimeout(() => {
            document.getElementById("fileURL").click(); 
        }, 3000);
    }

    convertToTextarea = () => {

        let doc = this.convertToDoc();

        ReactDOM.render(
            <div id="RenderedHtml">
                <iframe 
                    id="outputTA"
                    className="iframe--Output"
                    srcDoc={doc}
                />
                <label id="nameFieldLabel" htmlFor="fileNameField">
                    Enter a File Name For The Download:
                    <input 
                        type="text" 
                        value={this.state.fileName}
                        id="fileNameField" 
                        onChange={this.fileNameChange} 
                    />
                </label>
                <div>
                    <button 
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"    
                        id="htmlDownload"
                        onClick={this.convertToHtmlBlobAndDownload}
                        >Download HTML
                    </button>
                </div>
                <div>
                    <button 
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"    
                        id="mdDownload"
                        onClick={this.convertToMdBlobAndDownload}
                        >Download Markdown
                    </button>
                </div>
            </div>,
            document.getElementById("outputDiv")
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label id="inputField">
                    <textarea 
                        value={this.state.input}
                        id="sourceTA" 
                        rows="10" 
                        cols="50"
                        onChange={this.handleChange} 
                        />
                </label>
                <div>
                    <button 
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"    
                        id="button"
                        onClick={this.convertToTextarea}
                        >Submit Markdown
                    </button>
                </div>
            </form>
        );
    }
}

export default MedFrame;


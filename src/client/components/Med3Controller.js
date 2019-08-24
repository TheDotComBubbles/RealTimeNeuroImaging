
import toast from "izitoast";
import React from 'react'
import ReactDOM from "react-dom";
import Med3WebFrame from "./Med3WebFrame";

class Med3Controller extends React.Component {
      
    constructor(props) {
      super(props);
    
        this.state = {
            display: false
        };
    }

    displayImaging = () => {
        
        if(this.props.patient) {
            ReactDOM.render(
                <div id="renderedwebframe">
                    <Med3WebFrame />           
                </div>,
                document.getElementById("imaging")
            ) 
        }
        else {
            toast.warning({
                title: 'Render Images', 
                message: 'Select a Patient prior to rendering an image',
                position: "center"
            });
        }
    }
    
    render() {
        return (
            <div className="centered">
                <div className="toolt">
                    <div 
                        className="toolttext">
                        <div>
                            <div className="toolTitle">
                                Selecting a Patient: 
                            </div>
                            The list above includes all currently checked in patients. 
                            Choose one to view information and import the patient's scans
                            <div className="toolTitle">
                                Viewing Results: 
                            </div>
                            Scroll down to the Real-Time Renderer to view images.
                            <ul className="leftJustified">
                                <li>
                                    Toggle Between 2d and 3d Rendering
                                </li>
                                <li>
                                    Interact with the rendered image in the right pane
                                </li>
                                <li>
                                    Choose Rendering, View, and editing options in the left pane
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img 
                        className="padded help"
                        src="/public/help.png" 
                        alt="HelpIcon">
                    </img>
                    <button
                        className="tooltiptext"
                        title="Tooltip"
                        type="submit"
                        onClick={this.displayImaging}
                        >
                        Render Images                
                    </button> 
                </div>
            </div>
        );
    };
}

export default Med3Controller;

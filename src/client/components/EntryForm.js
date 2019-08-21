import React from "react";
import ReactDOM from "react-dom";
import xss from "xss";
import Select from "react-select";
import Med3Controller from "./Med3Controller";

let messageDisplay = "";


class EntryForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            searchQuery: '',
            message: '',
            readOnly: false,
            imageURL: '',
            altImageText: '',
            patients: [{label: "No Patients Available", value: 1}],
            patient: '',
            patientData: []
    };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {

        this.props.socket.on('patients', data => {

            this.setState({patientData: data.patientData});

            let patientList = [];
            
            data.patientData.map(x => {
                if(!isNaN(x.id)) {
                    patientList.push({label: x.name, value: x.id})
                }
            });

            this.setState({patients: patientList}); 

            //Display Patient Data if a Patient has been selected
            if(this.state.patient) {
                let record = this.state.patientData.find(x=> {
                    return x.id == this.state.patient.value;
                });
                this.displayPatient(record);
            }
        });
        
        document.body.style.backgroundImage="url('')";

        this.getPatients();
    }

    componentWillUnmount = () => {
        this.props.socket.off("patients");
    }
    
    componentWillMount = () => {
        document.body.style.backgroundImage=null;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    getPatients = () => {
        this.props.socket.emit('get', {});
    }

    getPatientData = (patientIndex) => {
        
        this.props.socket.emit('get', {

            patient: patientIndex
        });
    }

    
    removeImaging = () => {
        
        ReactDOM.render(
            <div id="RenderedHtml">         
            </div>,
            document.getElementById("imaging")
        ) 
    }

    handleChange(event) {
        this.removeImaging();
        this.setState({patient: event});
        this.getPatientData(event.value);
    }

    displayPatient = (patientData) => {
        ReactDOM.render(
            <div id="RenderedHtml">
                <h3>Patient Data:</h3>
                <div>
                    <label className="patientData">ID:</label> {patientData.id}
                </div>
                <div>
                    <label className="patientData">Name:</label>{patientData.name}                        
                </div>
                <div>
                    <label className="patientData">Sex:</label>{patientData.sex}
                </div>
                <div>
                <label className="patientData">Condition:</label>{patientData.medical_condition}
                </div>            
            </div>,
            document.getElementById("outputDiv")
        );
    }
                //
    render() {
        return (
            <div id="patientList">
                <h2>Welcome! Dr. {this.props.username}</h2>
                <label htmlFor="react-select-2-input">
                    Please, select an available patient
                    <Select id="patientSelect" 
                        theme={(theme) => ({
                            ...theme,
                            colors: {
                            ...theme.colors,
                            //one of these fixes accessibility 
                            neutral1:	'black',
                            neutral2:	'black',
                            neutral3:	'black',
                            neutral4:	'black',
                            neutral5:	'black',
                            neutral10:	'black',
                            neutral20:	'black',
                            neutral30:	'black',
                            neutral40:	'black',
                            neutral50:	'black',
                            neutral60:	'black',
                            neutral70:	'black',
                            neutral80:	'black',
                            neutral90:	'black',
                            neutral100:	'black',
                            neutral1a:	'black',
                            neutral2a:	'black',
                            neutral3a:	'black',
                            neutral4a:	'black',
                            neutral5a:	'black',
                            neutral10a:	'black',
                            neutral20a:	'black',
                            neutral30a:	'black',
                            neutral40a:	'black',
                            neutral50a:	'black',
                            neutral60a:	'black',
                            neutral70a:	'black',
                            neutral80a:	'black',
                            neutral90a:	'black'                      
                            },
                        })}                    
                        className="padded blackText" 
                        options={ this.state.patients} 
                        onChange={this.handleChange}
                        value={this.state.patient}
                    /> 
                </label>
                <Med3Controller patient={this.state.patient}/>
            </div>
        ); 
    }
}

export default EntryForm;
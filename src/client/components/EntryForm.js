import React from "react";
import io from "socket.io-client";
import ReactDOM from "react-dom";
import xss from "xss";
import Select from "react-select";

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
            altImageText: '',
            patients: [{label: "No Patients Available", value: 1}],
            patient: '',
            patientData: []
    };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {

        socket.on('patients', data => {

            this.setState({patientData: data.patientData});

            let patientList = [];
            
            data.patientData.map(x => {
                patientList.push({label: x.name, value: x.id})
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
      
        socket.on("broadcast", (response) => {
            this.displayImage(response);
        });
            document.body.style.backgroundImage="url('')";

        this.getPatients();
    }
    
    componentWillMount = () => {
        document.body.style.backgroundImage=null;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    getPatients = () => {

        socket.emit('get', function (data) {
            console.log("getting patients ws");
          });
    }

    handleChange(event) {
        this.setState({patient: event});

        this.getPatients();
    }

    displayPatient = (patientData) => {
        ReactDOM.render(
            <div id="RenderedHtml">
                <h3>Patient Data:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Use button to initialize Imaging:
                        <ul>
                            <li>ID: {patientData.id}</li>
                            <li>Name: {patientData.name}</li>
                            <li>Sex: {patientData.sex}</li>
                            <li>Medical Condition: {patientData.medical_condition}</li>
                        </ul>
                    </label>
                </form>               
            </div>,
            document.getElementById("outputDiv")
        );
    }

    render() {
        return (
            <div id="patientList">
                <h2>Please Select a Patient</h2>
                        <Select id="patientSelect" 
                            className="padded" 
                            options={ this.state.patients} 
                            onChange={this.handleChange}
                            value={this.state.patient}
                            /> 
            </div>
        ); 
    }
}

export default EntryForm;
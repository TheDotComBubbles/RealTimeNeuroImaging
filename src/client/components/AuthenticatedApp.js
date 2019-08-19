import React from "react";
import EntryForm from "./EntryForm";
import Med3WebFrame from "./Med3WebFrame";
import App from "./App";
import ReactDOM from "react-dom";


export default function AuthenticatedApp(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="logo"/> 
        <a className="navbar-brand centered" href="#">
          NeuroTech
        </a>
        <a className="logout navbar-brand" href="#" onClick={function() {ReactDOM.render(<App socket={props.socket}/>, document.getElementById("app"));}}>
          Logout
        </a>
      </nav>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1>Analyze, Diagnose, and Respond in RealTime</h1>
            <div className="row borders">
              <section className="col borders" id="textEntry">
                    <div id="patientData">
                        <EntryForm 
                          socket={props.socket}
                          username={props.username}
                        />
                    </div>
              </section>
              <section className="col borders" id="textDisplay">
                    <div id="outputLabel">
                        <div id="outputDiv">
                        </div>
                    </div>
              </section>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Real-time Neuro Image Rendering Below:</h4>
                <div id="imaging">

                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import React from "react";
import EntryForm from "./EntryForm";
import Med3WebFrame from "./Med3WebFrame";

export default function AuthenticatedApp() {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand centered" href="#">
          NeuroTech
        </a>
      </nav>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1>Analyze, Diagnose, and Respond in RealTime</h1>
            <div className="row borders">
              <section className="col borders" id="textEntry">
                    <div id="patientData">
                        <EntryForm />
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
                <Med3WebFrame />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
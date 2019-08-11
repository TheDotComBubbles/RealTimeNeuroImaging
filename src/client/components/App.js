import React from "react";
import EntryForm from "./EntryForm";
import Imaging from "./Imaging";
import Med3WebFrame from "./Med3WebFrame";

export default function App() {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          Homepage
        </a>
      </nav>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to the Realtime Neuroimaging Viewer!</h1>
            <p>Analyze, Diagnose, and Adapt in Real-Time</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Begin Imaging</h2>
            </div>
          </div>
          <div className="row borders">
              <section className="col borders" id="textEntry">
                  <h3>Submit Credentials and Patient Information:</h3>
                    <div>
                        <EntryForm />
                    </div>
              </section>
              <section className="col borders" id="textDisplay">
                  <h3>Pixabay Search Results:</h3>
                    <div id="outputLabel">
                        <div id="outputDiv">
                        </div>
                    </div>
              </section>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4>Real-time Neuro Image Rendering Below:</h4>
                <Imaging />
                <Med3WebFrame />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
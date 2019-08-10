import React from "react";
import EntryForm from "./EntryForm";

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
            <h1 className="display-3">Welcome to the Landing Page!</h1>
            <p>A place to enjoy using Web Sockets</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Search Pixabay!</h2>
            </div>
          </div>
          <div className="row borders">
              <section className="col borders" id="textEntry">
                  <h3>Enter Information and Search Criteria:</h3>
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
        </div>
      </main>
    </div>
  );
}
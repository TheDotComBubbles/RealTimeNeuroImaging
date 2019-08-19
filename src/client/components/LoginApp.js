import toast from "izitoast";
import React from 'react'
import xss from 'xss';
import ReactDOM from "react-dom";
import AuthenticatedApp from './AuthenticatedApp';

class LoginApp extends React.Component {
      
    constructor(props) {
      super(props);

     this.state = {
         username: '',
         password: '',
         newUsername: '',
         newPassword: '',
         passwordConf: '',
         phyCheckbox: false,
         login: '',
         register: ''
  };

  this.usernameChange = this.usernameChange.bind(this);
  this.passwordChange = this.passwordChange.bind(this);
  this.newUsernameChange = this.newUsernameChange.bind(this);
  this.newPasswordChange = this.newPasswordChange.bind(this);
  this.passwordConfChange = this.passwordConfChange.bind(this);
  this.phyCheckboxChange = this.phyCheckboxChange.bind(this);
}

  componentDidMount() {

    this.props.socket.on('loginAttempt', data => {
        if(data.auth) ReactDOM.render(
          <AuthenticatedApp 
            socket={this.props.socket}
            username={this.state.username}
          />, document.getElementById("app"));
        else toast.error({color: 'red', title: 'Error', message: 'Invalid Username and Password Combination', position: 'center'});
      });
  }

  componentWillUnmount() {
    this.props.socket.off("loginAttempt")
  }

  login = () => {
      //authenticate here with socketio send
      this.props.socket.emit("login", {
        username: this.state.username,
        password: this.state.password
      });
  }

  usernameChange(event) {
    this.setState({username: xss(event.target.value)});
  }

  passwordChange(event) {
    this.setState({password: xss(event.target.value)});
  }

  newUsernameChange(event) {
    this.setState({newUsername: xss(event.target.value)});
  }

  newPasswordChange(event) {
    this.setState({newPassword: xss(event.target.value)});
  }

  passwordConfChange(event) {
    this.setState({passwordConf: xss(event.target.value)});
  }

  phyCheckboxChange(event) {
    this.setState({phyCheckbox: xss(event.target.value)});
  }

  register = () => {

    toast.settings({
      closeOnClick: true,
      closeOnEscape: true,
      progressBar: false,
      overlay: false,
      animateInside: false,
      color: "green",
    });

    if(!this.state.newUsername) toast.error({
      position:'center',
      title: 'Error', 
      message: 'Please enter a username'
    });
    else if(!this.state.newPassword) toast.error({title: 'Error', message: 'Please enter a Password',position:'center', color:'red'});
    else if(this.state.newPassword !== this.state.passwordConf) toast.error({title: 'Error', message: 'Confirmation Password Did Not Match',position:'center', color:'red'});
    else if(!this.state.phyCheckbox) toast.error({title: 'Error', message: 'Physicians and Graders Only Please',position:'center', color:'red'});
    else{
      this.props.socket.emit("newUser", {
        username: this.state.newUsername,
        password: this.state.newPassword
      })
      ReactDOM.render(<AuthenticatedApp socket={this.props.socket} username={this.state.username}/>, document.getElementById("app"));
    }
  } 

  handleSubmit(event) {
    event.preventDefault();
}

render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark front">
        <a className="navbar-brand centered" href="#">
          NeuroTech
        </a>
        </nav>
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1>Welcome to the Realtime Neuroimaging Viewer!</h1>
              <p>Analyze, Diagnose, and Respond in Real-Time</p>
            </div>
          </div>
          <div className="container">
            <div className="row borders">
              <div className="col-12">
                <article id="login">
                  <h2>Please Login with Your Credentials to Access Patient Records and Realtime Images</h2>
                  <form id="loginForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">
                      Username: 
                      <input  
                          className="centered"
                          id="username"
                          name="style" 
                          type="text"
                          value={this.state.username}
                          onChange={this.usernameChange} 
                      />
                    </label>
                    <div>
                      <label htmlFor="password">
                        Password: 
                        <input className="centered" 
                            id="password"
                            name="style" 
                            type="password"
                            value={this.state.password}
                            onChange={this.passwordChange}
                        />
                    </label>
                    </div>
                    <div>
                      <button 
                          type="submit"
                          onClick={this.login}
                          >
                          Submit                  
                      </button>  
                    </div>
                  </form>
                </article>
              </div>
            </div>
            <div className="row borders">
              <div className="col">
                <article id="register">
                  <h2 className="centered">Alternatively, you may register for a new account:</h2>
                  <form id="registrationForm" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <label htmlFor="newUsername" className="col-12 centered">
                        New Username: 
                        </label>
                          <input  
                              className="centered col-lg-4 col-md-8 col-sm-12" 
                              id="newUsername"
                              name="style" 
                              type="text"
                              value={this.state.newUsername}
                              onChange={this.newUsernameChange} 
                          />
                    </div>
                    <div className="row">
                      <label htmlFor="newPassword" className="col-12 centered">
                        New Password: 
                      </label>
                      <input className="centered col-lg-4 col-md-8 col-sm-12" 
                          id="newPassword"
                          name="style" 
                          type="password"
                          value={this.state.newPassword}
                          onChange={this.newPasswordChange}
                      />
                    </div>
                    <div className="row">
                      <label htmlFor="passwordConf"  className="col-12 centered">
                        Please Confirm Password: 
                      </label>                     
                      <input className="centered col-lg-4 col-md-8 col-sm-12" 
                          id="passwordConf"
                          name="style" 
                          type="password"
                          value={this.state.passwordConf}
                          onChange={this.passwordConfChange}
                      /> 
                    </div>                     
                    <div className="row">
                      <label htmlFor="phyCheckbox" className="centered col-8">
                        Please Confirm that you are either a Practicing Physician and/or Phil Barresi: 
                        <input
                          className="col-12 centered"
                            id="phyCheckbox"
                            name="style" 
                            type="checkbox"
                            value={this.state.phyCheckbox}
                            onChange={this.phyCheckboxChange}
                        />
                      </label>
                    </div>
                    <div>
                      <button 
                        type="submit"//type=submit veresus type=button?
                        onClick={this.register}
                        >
                        Submit                
                      </button> 
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}


export default LoginApp;
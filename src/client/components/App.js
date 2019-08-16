import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import LoginApp from  './LoginApp';

function App(props) {

    const user = true
    return (
            user ? <AuthenticatedApp socket={props.socket}/> : <LoginApp socket={props.socket}/>
    )
}

export default App;
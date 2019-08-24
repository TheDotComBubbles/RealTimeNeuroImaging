import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import LoginApp from  './LoginApp';

function App(props) {

    return (
            <LoginApp socket={props.socket} />
    )
}

export default App;
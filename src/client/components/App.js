import React from 'react';

//const loadAuthenticatedApp = () => import('./AuthenticatedApp');
//const AuthenticatedApp = React.lazy(loadAuthenticatedApp);
//const LoginApp = React.lazy(() => './LoginApp');
import LoginApp from './LoginApp';
import AuthenticatedApp from './AuthenticatedApp';

let auth = true;

function App() {

    const user = false
    //useUser()
    return user ? <AuthenticatedApp /> : <LoginApp />
}

export default App;

//Referenced from https://github.com/kentcdodds/bookshelf
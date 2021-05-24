import React from 'react';

import { Switch, Route } from 'react-router-dom';
import InitialContentBoard from './pages/InitialContentBoard';
import FrontEndContentBoard from './pages/FrontEndContentBoard';
import BackEndContentBoard from './pages/BackEndContentBoard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/launchBoard">
                <InitialContentBoard />
            </Route>
            <Route path="/frontendBoard">
                <FrontEndContentBoard />
            </Route>
            <Route path="/backendBoard">
                <BackEndContentBoard />
            </Route>
            <Route path="/">
                <SignIn />
            </Route>
            <Route path="/register">
                <SignUp />
            </Route>
        </Switch>
    )
}

export default Routes;
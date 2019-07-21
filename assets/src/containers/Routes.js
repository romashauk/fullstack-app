import React from 'react';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import {Switch, Route} from 'react-router';

export default function Routes() {
    return (
        <Switch>
            <Route exact render={() => <h1>hello world</h1>} path="/" />}
            <Route exact component={SignIn} path="/sign_in" />
            <Route exact component={SignUp} path="/sign_up" />
        </Switch>
    );
}

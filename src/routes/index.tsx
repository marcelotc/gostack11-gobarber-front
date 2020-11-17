import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn}></Route>
        <Route path="/signUp" component={SignUp}></Route>
    </Switch>
);

export default Routes; 
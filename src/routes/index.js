import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';

export default (
    <Switch>
        <Route path="/" component={Home} exact />
        <Redirect to="/" />
    </Switch>
);
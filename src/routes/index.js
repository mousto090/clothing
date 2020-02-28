import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Shop from '../containers/Shop/Shop';
import Auth from '../containers/Auth/Auth';

export default (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
    </Switch>
);
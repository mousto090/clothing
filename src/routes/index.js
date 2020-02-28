import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Shop from '../containers/Shop/Shop';

export default (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Redirect to="/" />
    </Switch>
);
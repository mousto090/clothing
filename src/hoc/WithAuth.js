import React, { Component } from 'react';
import store from '../store';
import { Redirect } from 'react-router-dom';

const WithAuth = (WrappedComponent) => {
    const state = store.getState();
    const { userReducer: { currentUser } } = state;

    return class AuthenticatedComponent extends Component {

        render() {
            if (!currentUser) {
                return <Redirect to="/auth" />
                // eslint-disable-next-line no-undef
                // location.assign(oauthSigninURL);
                // return null;
            }
            return (<WrappedComponent {...this.props} currentUser={currentUser} />);
        }
    };
};

export default WithAuth;
import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.module.scss";
import routes from "./routes";
import Header from "./components/Header/Header";
import { firebaseAuth, createUser } from "./firebase";
import { userActions } from "./store/actions";
import { selectCurrentUser, selectUserError, selectUserIsLoading } from "./store/user/selectors";
import { createStructuredSelector } from "reselect";

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(async authUser => {
      if (!authUser) {
        return this.props.onSigninFailure();
      }
      const userDocRef = await createUser(authUser);
      userDocRef.onSnapshot(snapshot => {
        const { id } = snapshot;
        const currentUser = { ...snapshot.data(), id };
        this.props.onSigninSucess(currentUser);
      })

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  error: selectUserError, 
  isLoading: selectUserIsLoading
})

const mapDispatchToProps = dispatch => ({
  onSigninSucess: user => dispatch(userActions.signinSuccess(user)),
  onSigninFailure: () => dispatch(userActions.signinFailure()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

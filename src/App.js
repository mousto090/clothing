import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.module.scss";
import routes from "./routes";
import Header from "./components/Header/Header";
import { firebaseAuth, createUser } from "./firebase";
import { authActionsCreators } from "./store/actionsCreators";

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(async authUser => {
      if (!authUser) {
        //TO DO call signinfailure
        return this.props.onSigninSucess(null);
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

const mapStateToProps = state => {
  const { authReducer: { error, isLoading, currentUser } } = state;
  return { error, isLoading, currentUser };
}
const mapDispatchToProps = dispatch => ({
  // onSignin: (email, password) => dispatch(authActionsCreators.signin(email, password)),
  onSigninSucess: (user) => dispatch(authActionsCreators.signinSuccess(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

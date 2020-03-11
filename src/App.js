import React, { Component } from "react";
import "./App.module.scss";
import routes from "./routes";
import Header from "./components/Header/Header";
import firebase from "./utils/firebase";

class App extends Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        {routes}
      </div>
    );
  }
}

export default App;

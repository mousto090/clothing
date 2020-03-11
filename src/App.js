import React, { Component } from "react";
import "./App.module.scss";
import routes from "./routes";
import Header from "./components/Header/Header";
import { firebaseAuth, createUser } from "./firebase";

class App extends Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(async authUser => {
      console.log(authUser);
      if (!authUser) {
        return this.setState({ currentUser: null });
      }
      const userDocRef = await createUser(authUser);
      userDocRef.onSnapshot(snapshot => {
        const { id } = snapshot;
        this.setState({ currentUser: { ...snapshot.data(), id } })
      })

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

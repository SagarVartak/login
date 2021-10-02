import "./App.css";
import fire from "./config/fire";
import React, { Component } from "react";
// import LoginRegister from "./components/LoginRegister";
import Home from "./pages/Home";
// import Login from "./components/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.authListner();
  }
  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div><Home/></div>;
    // {this.state.user ? <Home /> : <Login />}
  }
}

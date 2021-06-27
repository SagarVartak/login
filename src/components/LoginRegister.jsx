import React, { Component } from "react";
import fire from "../config/fire";
var database = firebase.database();
import { FaUserAlt, FaLock } from "react-icons/fa";
export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        this.setState({ fireErrors: error.message });
        // ..
      });
  };

  register = (event) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        this.setState({ fireErrors: error.message });
        // ..
      });
  };

  getAction = (action) => {
    if (action === "reg") {
      this.setState({
        formTitle: "Register User",
        loginBtn: false,
        fireErrors: "",
      });
    } else {
      this.setState({
        formTitle: "Login",
        loginBtn: true,
        fireErrors: "",
      });
    }
  };

  render() {
    let errNotification = this.state.fireErrors ? (
      <div className="Error">{this.state.fireErrors}</div>
    ) : null;

    let submitBtn = this.state.loginBtn ? (
      <input
        className="btn"
        type="submit"
        onClick={this.login}
        value="SignIn"
      ></input>
    ) : (
      <input
        className="btn"
        type="submit"
        onClick={this.register}
        value="SignUp"
      ></input>
    );
    let login_register = this.state.loginBtn ? (
      <button className="btn" id="register1" onClick={() => this.getAction("reg")}>
        register
      </button>
    ) : (
      <button className="btn" id="register2" onClick={() => this.getAction("login")}>
        Login
      </button>
    );
    return (
      <div>
        <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>One of us ?</h3>
                  <button
                    onClick={this.props.changes}
                    className="btn transparent"
                    id="sign-up-btn"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
        <div className="signin-signup">
        {errNotification}
              <form
                method="POST"
                name="login"
                className="sign-in-form"
              >
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i>
                    <FaUserAlt color="#333" />
                  </i>
                  <input
                    type="text"
                    name="email"
                    placeholder="EMAIL"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i>
                    <FaLock color="#333" />
                  </i>
                  <input
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {submitBtn}
                {/* <input type="submit" className="btn" value="Sign up" /> */}
              </form>
              {login_register}
            </div>
          
      </div>
    );
  }
}

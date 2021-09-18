import React, { Component } from 'react';
import fire from "../config/fire";
import "../styles/login.css"
class login extends Component {
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
    
      register = (event) => {//should be in admin page
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
            class="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={this.login}
              value="SignIn"
            ></input>
          ) : (
            <input
            class="w-100 btn btn-lg btn-primary" type="submit"
              onClick={this.register}
              value="SignUp"
            ></input>
          );
          let login_register = this.state.loginBtn ? (
            <button class="w-100 btn btn-lg btn-primary" type="submit" id="register1" onClick={() => this.getAction("reg")}>
              register
            </button>
          ) : (
            <button class="w-100 btn btn-lg btn-primary" type="submit" id="register2" onClick={() => this.getAction("login")}>
              Login
            </button>
          );
        return (
            <div>
                <div class="text-center">
    
    <main class="form-signin">
    {errNotification}
      <form>
        <img class="mb-4" src={"../logo.svg"} alt="" width="72" height="57"/>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={this.state.email}
                    onChange={this.handleChange}
                    required/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password" value={this.state.password}
                    onChange={this.handleChange}
                    required/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div class="checkbox mb-3">
          <input type="checkbox" value="remember-me"/>
            <label> Remember me </label>
        </div>
        {submitBtn}
        <p></p>
        {login_register}
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
      
    </main>
    
    
        
      </div>
            </div>
        );
    }
}

export default login;
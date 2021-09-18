import React, { Component } from "react";
import fire from "../config/fire";
import Header from "../components/Header";
// import SideBar from "./SideBar";
import GetImages from "../components/GetImages";

export default class Home extends Component {
  logout = (event) => {
    fire.auth().signOut();
  };
  

  render() {
    return (
      <div>
        <Header out={this.logout}/>
        {/* <SideBar /> */}
        <GetImages />
      </div>
    );
  }
}

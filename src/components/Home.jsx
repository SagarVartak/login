import React, { Component } from "react";
import fire from "../config/fire";
import Header from "./Header";
import SideBar from "./SideBar";

var listOfImages=[];

export default class Home extends Component {
  logout = (event) => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div>
        <Header out={this.logout}/>
        {/* <SideBar /> */}
        {/* <div>
          <img src="http://shaaggy.epizy.com/Wallpaper/"></img>
        </div> */}
      </div>
    );
  }
}

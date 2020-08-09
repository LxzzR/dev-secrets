import React, { Component } from "react";
import firebase from "./firebase";
import Header from "./Header";
import UserInput from "./UserInput";

class App extends Component {
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (res) => {
      console.log(res.val());
    });
  }

  render() {
    return (
      <div class="viewport">
        <Header />
        <UserInput />
      </div>
    );
  }
}

export default App;

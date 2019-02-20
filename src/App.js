import React, { Component } from "react";
import Time from "./components/time/Time";
import Main from "./components/main/Main";
import SingUp from "./components/sing_up/SingUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      isAuthenticated: false
    };
  }

  componentWillMount() {
    if (localStorage.getItem("name") !== null) {
      this.setState({
        name: JSON.parse(localStorage.getItem("name")),
        isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated"))
      });
    }
  }

  componentDidUpdate() {
    let NAME = JSON.stringify(this.state.name);
    let AUTH = JSON.stringify(this.state.isAuthenticated);
    localStorage.setItem("name", NAME);
    localStorage.setItem("isAuthenticated", AUTH);
  }

  updateState = (newName, newIsAuthenticated) => {
    this.setState({
      name: newName,
      isAuthenticated: newIsAuthenticated
    });
  };

  render() {
    return (
      <div>
        <Time />
        {this.state.isAuthenticated ? (
          <Main name={this.state.name} />
        ) : (
          <SingUp
            name={this.state.name}
            isAuthenticated={this.state.isAuthenticated}
            updateState={this.updateState}
          />
        )}
      </div>
    );
  }
}

export default App;

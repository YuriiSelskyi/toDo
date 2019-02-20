import React, { Component } from "react";
import Items from "../../components/item_form/Items";
import FormInput from "../../components/input_form/FormInput";
import "../../index.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  add = text => {
    let now = new Date(),
      hours = now.getHours(),
      minutes = now.getMinutes();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    let time = `${hours}:${minutes}`;
    let allData = {
      text,
      time,
      done: false
    };

    this.setState({ data: [...this.state.data, allData] });
  };

  componentWillMount() {
    if (localStorage.getItem("data") !== null) {
      this.setState({ data: JSON.parse(localStorage.getItem("data")) });
    }
  }

  componentDidUpdate() {
    let DATA = JSON.stringify(this.state.data);
    localStorage.setItem("data", DATA);
  }

  updateList = newList => {
    this.setState({ data: newList });
  };

  render() {
    return (
        <div>
          <h1 className="title">Hi {this.props.name}</h1>
          <h3  className="title">You can write tasks</h3>
          <FormInput addElement={this.add} />
          <Items dataList={this.state.data} updateList={this.updateList} />
        </div>
      
    );
  }
}

export default Main;

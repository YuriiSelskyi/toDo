import React, { Component } from "react";
import Clock from "react-live-clock";
import "../../index.css";

class Time extends Component {
	render() {
		return (
			<Clock
				format="HH:mm"
				ticking={true}
				interval={1000}
				className="time title"
			/>
		);
	}
}

export default Time;

import React, { Component } from "react";
import { FormGroup, InputGroup, Button, FormControl } from "react-bootstrap";
import "../../index.css";

class FormInput extends Component {

	submit = () => {
		const { addElement } = this.props;

		if (this.input.value.trim()) {
			addElement(this.input.value);
			this.input.value = "";
		}
	};

	render() {
		return (
			<form
				onSubmit={e => e.preventDefault()}
				className="main-style-from-input "
			>
				<FormGroup className="container-fluid">
					<InputGroup>
						<FormControl 
							autoFocus
							type="text"
							placeholder="Task..."
							ref={ref => (this.input = ref)}
							 className="col-10 offset-1"
						/>
						<InputGroup className="col-2">
							<Button type="submit" onClick={this.submit} className="button-item-style">
								Enter
							</Button>
						</InputGroup>
					</InputGroup>
				</FormGroup>
			</form>
		);
	}
}

export default FormInput;

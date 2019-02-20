import React, { Component } from "react";
import { FormGroup, InputGroup, Button, FormControl } from "react-bootstrap";
import "../../index.css";

class SingUp extends Component {
	submit = () => {
		const { updateState } = this.props;
		if (this.input.value.trim()) {
			updateState(this.input.value, true);
		}
	};

	render() {
		return (
			<div>
				<h1 className="title">Write Name</h1>
				<form
					onSubmit={e => e.preventDefault()}
					className="main-style-from-input"
				>
					<FormGroup>
						<InputGroup>
							<FormControl
								autoFocus
								type="text"
								placeholder="Task..."
								ref={ref => (this.input = ref)}
							/>
							<InputGroup>
								<Button
									type="submit"
									onClick={this.submit}
									className="button-item-style"
								>
									Enter
								</Button>
							</InputGroup>
						</InputGroup>
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default SingUp;

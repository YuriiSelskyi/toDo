import React, { Component } from "react";
import {
	ButtonToolbar,
	ListGroup,
	InputGroup,
	ListGroupItem,
	ButtonGroup,
	Button
} from "react-bootstrap";
import "../../index.css";

class Items extends Component {
	state = {
		editedElement: null,
		value: null
	};

	removeElement = index => {
		const { dataList, updateList } = this.props;
		const newList = [...dataList];

		newList.splice(index, 1);
		updateList(newList);
	};

	changeElement = text => {
		return (
			<form onSubmit={e => e.preventDefault()}>
				<input
					autoFocus
					type="text"
					ref={ref => (this.input = ref)}
					defaultValue={text}
				/>
				<button type="submit" onClick={this.submit}>
					Save
				</button>
			</form>
		);
	};

	submit = event => {
		event.preventDefault();

		const newList = [...this.props.dataList];

		newList[this.state.editedElement].text = this.input.value;
		this.setState({ editedElement: null });
		this.props.updateList(newList);
	};

	edit = editedElement => {
		this.setState({ editedElement });
	};

	change = index => {
		const newList = [...this.props.dataList];
		newList[index].done = !newList[index].done;
		this.props.updateList(newList);
	};

	render() {
		const listItems = this.props.dataList.map((item, index) => (
			<ListGroup key={index.toString()}>
				<ListGroupItem
					bsstyle={item.done ? "success" : null}
					className="style"
				>
					<InputGroup.Prepend bsstyle={item.done ? "success" : null}>
						<InputGroup.Checkbox
							aria-label="Checkbox for following text input"
							checked={item.done}
							onChange={() => this.change(index)}
						/>
					</InputGroup.Prepend>

					<div className="flexbox-main">
						<div className="list">
							{this.state.editedElement === index ? (
								this.changeElement(item.text)
							) : item.done ? (
								<s>{item.text}</s>
							) : (
								item.text
							)}
						</div>
						<div className="time-style">{item.time}</div>
					</div>
					<div className="flexbox-second">
						<div>
							<ButtonToolbar>
								<ButtonGroup>
									<Button
										onClick={() => this.edit(index)}
										className="button-item-style"
									>
										edit
									</Button>

									<Button
										onClick={() =>
											this.removeElement(index)
										}
										className="button-item-style"
									>
										delete
									</Button>
								</ButtonGroup>
							</ButtonToolbar>
						</div>
					</div>
				</ListGroupItem>
			</ListGroup>
		));
		return <div className="lists-element">{listItems}</div>;
	}
}

export default Items;

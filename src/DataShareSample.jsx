import React from 'react';
import CustomerDataShare from './customerDataShare/customerDataShare';

class DataShareExample extends React.Component {
	constructor(props, context) {
		super(props, context);

		const id = CustomerDataShare.getId();
		const error = CustomerDataShare.getError();

		this.state = {
			id,
			error,
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		CustomerDataShare.setId(document.getElementById('custId').value).then(() => {
			const id = CustomerDataShare.getId();
			const error = CustomerDataShare.getError();
			this.setState({ id, error });
		});
	}

	render() {
		return (
			[
				(this.state.error && <p>{this.state.error}</p>) ||
				<p>{`${CustomerDataShare.getFirstName() || ''} "the wall" ${CustomerDataShare.getLastName() || ''}`}</p>,
				<input id="custId" type="text" />,
				<button onClick={this.clickHandler}>submit</button>,
			]
		);
	}
}

export default DataShareExample;

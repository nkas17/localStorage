import React from 'react';
import CustomerDataShare from './customerDataShare/customerDataShare';
import DataShareSampleView from './DataShareSampleView';

class DataShareExample extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			id: 0,
			error: null,
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	componentDidMount() {
		const id = CustomerDataShare.getId();
		const error = CustomerDataShare.getError();

		this.state = {
			id,
			error,
		};
	}

	clickHandler() {
		const newId = document.getElementById('custId').value;
		if (newId !== this.state.id) {
			CustomerDataShare.setId(newId).then(() => {
				const id = CustomerDataShare.getId();
				const error = CustomerDataShare.getError();
				this.setState({ id, error });
			});
		}
	}

	render() {
		return (
			<DataShareSampleView
				id={CustomerDataShare.getId()}
				name={CustomerDataShare.getLastName()}
				clickHandler={this.clickHandler}
				error={this.state.error}
			/>
		);
	}
}

export default DataShareExample;

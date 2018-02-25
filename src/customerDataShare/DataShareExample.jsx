import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import CustomerDataShare from './customerDataShareSelectors';
import DataShareExampleView from './DataShareExampleView';

let DataShareExampleWithRedux;

class DataShareExample extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			id: 0,
			error: null,
			additionalNames: [],
		};
		this.clickHandler = this.clickHandler.bind(this);

		DataShareExampleWithRedux = reduxForm({
			form: 'DataShareForm',
			enableReinitialize: true,
			keepDirtyOnReinitialize: true,
		})(DataShareExampleView);
	}

	componentDidMount() {
		const id = CustomerDataShare.getId();
		const error = CustomerDataShare.getError();
		const additionalNames = CustomerDataShare.getAdditionalNames();

		this.state = {
			id,
			error,
			additionalNames,
		};
		this.clickHandler();
	}

	clickHandler() {
		const newId = document.getElementById('custId').value;
		if (newId !== this.state.id) {
			CustomerDataShare.setId(newId).then(() => {
				const id = CustomerDataShare.getId();
				const error = CustomerDataShare.getError();
				const additionalNames = CustomerDataShare.getAdditionalNames();
				this.setState({ id, error, additionalNames });
			});
		}
	}

	render() {
		return (
			<DataShareExampleWithRedux
				id={CustomerDataShare.getId()}
				name={CustomerDataShare.getLastName()}
				clickHandler={this.clickHandler}
				additionalNames={this.state.additionalNames}
			/>
		);
	}
}

const mapStateToProps = (rootState) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({
		}, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DataShareExample);

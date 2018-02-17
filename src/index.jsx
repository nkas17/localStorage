import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import customerDataShareApi from './customerDataShare/customerDataShareApi';
import {
	saveCustomerDataShare,
} from './customerDataShare/customerDataShareLocalStore';
import './styles/styles.css';

// get data then store it
customerDataShareApi.getCustomerDataShare(2).then((data) => {
	console.log(data);
	saveCustomerDataShare(data);
});

ReactDOM.render(
	<App />,
	document.getElementById('app'), // eslint-disable-line no-undef
);

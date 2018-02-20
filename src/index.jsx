import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import CustomerDataShare from './customerDataShare/customerDataShare';
import './styles/styles.css';

// CustomerDataShare.setId(2).then((data) => {
	ReactDOM.render(
		<App />,
		document.getElementById('app'), // eslint-disable-line no-undef
	);
// });

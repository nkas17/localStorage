import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './styles/styles.css';

// CustomerDataShare.setId(2).then((data) => {
const render = (Application) => {
	ReactDOM.render(
		<AppContainer>
			<Application />
		</AppContainer>,
		document.getElementById('app')
	);
};

render(App);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		render(App);
	});
}


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import App from './App';
import './styles/styles.css';

const store = configureStore();
// CustomerDataShare.setId(2).then((data) => {
const render = (Application) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				{Application}
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	);
};

render(<App />);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default; // eslint-disable-line global-require
		render(<NextApp />);
	});
	/* Watches for the redux store to have changes and updates the reducers
	accordingly keep the same data */
	module.hot.accept('./store/configureStore', () => {
		const newConfigureStore = require('./store/configureStore'); // eslint-disable-line global-require
		store.replaceReducer(newConfigureStore.rootReducer);
	});
}


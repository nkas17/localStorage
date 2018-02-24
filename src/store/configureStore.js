import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const initialState = {};

const rootReducer = combineReducers({
	form: formReducer,
});

export default function configureStore() {
	// Add wrapper to enable redux dev tools
	// @see https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
	);
}

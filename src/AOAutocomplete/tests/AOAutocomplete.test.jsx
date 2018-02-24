import React from 'react';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { snapshotRunner } from 'ao-react-redux-test-util';
import AOAutocomplete from '../AOAutocomplete';

// Set up some default test data
const defaultProps = {
	id: 'test',
	name: 'test',
	items: [
		{ caption: 'Caption1', value: 'Value1' },
		{ caption: 'Caption2', value: 'Value2' },
	],
};

const allProps = {
	id: 'test',
	name: 'test',
	items: [
		{ customCaption: 'Caption1', customValue: 'Value1' },
		{ customCaption: 'Caption2', customValue: 'Value2' },
	],
	getItemValue: item => item.customValue,
	renderItem: item => <span>{item.customCaption}</span>,
	shouldItemRender: () => true,
	sortItems: a => (a.customCaption === 'Caption1' ? -1 : 1),
	onBlur: () => {},
	onChange: () => {},
	onDragStart: () => {},
	onDrop: () => {},
	onFocus: () => {},
	widthClassName: 'some-width-class',
	additionalClassName: 'some-additional-class',
	rightLabel: 'probably unused',
	transition: false,
	placeholder: 'placeholder',
	validate: () => true,
	warn: () => true,
	children: '<div />',
	autoHighlight: false,
	inputProps: { extraProp: 'extraProp' },
	menuStyle: { background: 'black' },
	onMenuVisibilityChange: () => {},
	onSelect: () => {},
	renderMenu: items => <div>{items}</div>,
	wrapperProps: { wrapperProp: 'wrapperProp' },
	wrapperStyle: { background: 'white' },
};

// Set up the specific test scenarios
const scenarios = {
	'renders AOAutocomplete correctly with defaults': defaultProps,
	'renders AOAutocomplete correctly with all props': allProps,
	'renders AOAutocomplete correctly with open as false': Object.assign({}, defaultProps, {
		open: false,
	}),
};

const AOAutocompleteWithRedux = reduxForm({
	form: 'AOAutocompleteForm',
})(AOAutocomplete);

const store = createStore(combineReducers({ form: formReducer }));

snapshotRunner(scenarios, props => <Provider store={store}><AOAutocompleteWithRedux {...props} /></Provider>);

import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reduxForm, reducer as formReducer, getFormValues } from 'redux-form';
import { mount } from 'enzyme';

import AOAutocomplete from '../AOAutocomplete';

describe('Redux Form Integration - AOAutocomplete', () => {
	it('triggers custom onChange action and redux-form onChange action', () => {
		const store = createStore(combineReducers({ form: formReducer }), {});
		const onChange = jest.fn();
		const onFocus = jest.fn();
		const Form = reduxForm({ form: 'myFormName' })(connect()(() => (
			<AOAutocomplete
				id="someField"
				name="someField"
				onChange={onChange}
				onFocus={onFocus}
				items={[
					{ caption: 'Caption1', value: 'Value1' },
					{ caption: 'Caption2', value: 'Value2' },
				]}
			/>
		)));

		const component = mount((
			<Provider store={store}>
				<Form />
			</Provider>
		));
		component.find('input#someField').simulate('focus');
		expect(onFocus).toBeCalled();

		component.find('input#someField').simulate('change', { target: { value: 'item 1' } });
		expect(onChange.mock.calls[0][0]).toBeDefined(); // the event was the first arg
		expect(onChange.mock.calls[0][1]).toBe('item 1'); // the new value was the second arg
		expect(onChange.mock.calls[0][2]).toBe(undefined); // The prior value was the third arg
		expect(getFormValues('myFormName')(store.getState()).someField).toBe('item 1'); // Verify the form store was updated
	});

	it('triggers redux-form onBlur action with value instead of caption text', () => {
		const store = createStore(combineReducers({ form: formReducer }), {});
		const Form = reduxForm({ form: 'myFormName' })(connect()(() => (
			<AOAutocomplete
				id="someField"
				name="someField"
				items={[
					{ caption: 'Caption1', value: 'Value1' },
					{ caption: 'Caption2', value: 'Value2' },
				]}
			/>
		)));

		const component = mount((
			<Provider store={store}>
				<Form />
			</Provider>
		));

		component.find('input#someField').simulate('blur', { target: { value: 'Caption2' } });
		expect(getFormValues('myFormName')(store.getState()).someField).not.toBe('Value1');
		expect(getFormValues('myFormName')(store.getState()).someField).toBe('Value2'); // Verify the form store was updated
	});

	it('triggers redux-form onChange action with value instead of caption text', () => {
		const store = createStore(combineReducers({ form: formReducer }), {});
		const Form = reduxForm({ form: 'myFormName' })(connect()(() => (
			<AOAutocomplete
				id="someField"
				name="someField"
				items={[
					{ caption: 'Caption1', value: 'Value1' },
					{ caption: 'Caption2', value: 'Value2' },
				]}
			/>
		)));

		const component = mount((
			<Provider store={store}>
				<Form />
			</Provider>
		));

		component.find('input#someField').simulate('change', { target: { value: 'Caption2' } });
		expect(getFormValues('myFormName')(store.getState()).someField).not.toBe('Value1');
		expect(getFormValues('myFormName')(store.getState()).someField).toBe('Value2'); // Verify the form store was updated
	});
});

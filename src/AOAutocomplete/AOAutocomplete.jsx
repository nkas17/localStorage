import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import AutocompleteFormConnector from './AutocompleteFormConnector';
import * as defaults from './utility';
import './aoAutocomplete.css';

/**
 * Creates an autocomplete component.
 * To customize the menu styles, instead of using menuStyle, customize the css class .arrf-autocomplete
 * To customize the item styles, use the css class .arrf-autocomplete__item
 * To customize the highlighted item styles, use the css class .arrf-autocomplete__item--highlighted
 *
 * @component AOAutocomplete
 * @import AOAutocomplete
 * @see https://github.com/reactjs/react-autocomplete/blob/master/lib/Autocomplete.js
 */
const AOAutocomplete = ({
	getItemValue,
	items,
	renderItem,
	renderItemGenerator,
	shouldItemRender,
	sortItems,
	onBlur,
	onChange,
	onDragStart,
	onDrop,
	onFocus,
	id,
	name,
	widthClassName,
	additionalClassNames,
	rightLabel,
	transition,
	placeholder,
	validate,
	warn,
	children,
	autoHighlight,
	inputProps,
	onMenuVisibilityChange,
	onSelect,
	renderMenu,
	wrapperProps,
	wrapperStyle,
	open,
	getCaptionFromValue,
	getValueFromCaption,
}) => (
	<Field
		component={AutocompleteFormConnector}
		onBlur={onBlur}
		onChange={onChange}
		onDragStart={onDragStart}
		onDrop={onDrop}
		onFocus={onFocus}
		id={id}
		name={name}
		widthClassName={widthClassName}
		additionalClassNames={additionalClassNames}
		rightLabel={rightLabel}
		transition={transition}
		placeholder={placeholder}
		validate={validate}
		warn={warn}
		getItemValue={getItemValue}
		items={items}
		renderItem={renderItem}
		shouldItemRender={shouldItemRender}
		sortItems={sortItems}
		autoHighlight={autoHighlight}
		inputProps={inputProps}
		onMenuVisibilityChange={onMenuVisibilityChange}
		onSelect={onSelect}
		renderMenu={renderMenu}
		wrapperProps={wrapperProps}
		wrapperStyle={wrapperStyle}
		open={open}
		getCaptionFromValue={getCaptionFromValue}
		getValueFromCaption={getValueFromCaption}
		renderItemGenerator={renderItemGenerator || defaults.renderItemGenerator} // will be used as the default for renderItem if none is supplied
	>
		{children}
	</Field>
);

AOAutocomplete.defaultProps = {
	getItemValue: defaults.getItemValue,
	shouldItemRender: defaults.shouldItemRender,
	sortItems: defaults.sortItems,
	renderMenu: defaults.renderMenu,
	onBlur: () => {},
	onChange: () => {},
	onDragStart: () => {},
	onDrop: () => {},
	onFocus: () => {},
	rightLabel: '',
	transition: false,
	placeholder: '',
	widthClassName: 'ao-width-M',
	additionalClassNames: '',
	onSelect: () => {},
	getCaptionFromValue: defaults.getCaptionFromValue,
	getValueFromCaption: defaults.getValueFromCaption,
};

AOAutocomplete.propTypes = {
	/** unique id for the input field */
	id: PropTypes.string.isRequired,

	/** name of the input field - should match the field name in the redux store */
	name: PropTypes.string.isRequired,

	/**
	 * Function for getting the display value from the items list. The default assumes the items has a 'value' property to use.
	 */
	getItemValue: PropTypes.func,

	/**
	 * Array of drop-down options. Many default functions assume an array of objects with a 'caption' and 'value' property.
	 */
	items: PropTypes.arrayOf(PropTypes.any).isRequired,

	/**
	 * Invoked for each entry in items. The default assumes the items have a 'caption' property to display.
	 * @see https://github.com/reactjs/react-autocomplete
	 */
	renderItem: PropTypes.func,

	/**
	 * Higher order function to create the renderItem function. This library passes renderItemGenerator the input value for use
	 */
	renderItemGenerator: PropTypes.func,

	/**
	 * Function to filter which items should render. The default assumes a 'caption' and 'value' property and will filter based on the input value being contained in either of those.
	 */
	shouldItemRender: PropTypes.func,

	/**
	 * Function to sort the items. The default assumes the items have a 'caption' property and sorts based on the location of the match.
	 * @see https://github.com/reactjs/react-autocomplete/blob/master/lib/utils.js
	 */
	sortItems: PropTypes.func,

	/**
	* ao-width size for the field (ao-width-XXS, ao-width-XS, ao-width-S, ao-width-M, ao-width-L, ao-width-XL, ao-width-XXL)
	* @see https://wordpress.aoins.com/AOUI/size-utilities/
	*/
	widthClassName: PropTypes.string,

	/** css class(es) to be appended to the input field */
	additionalClassNames: PropTypes.string,

	/** text to display as the label on the right of the input, often used for checkboxes and radio inputs */
	rightLabel: PropTypes.string,

	/** set this to true if you want to use transitions when a field becomes visible */
	transition: PropTypes.bool,

	/** input text placeholder */
	placeholder: PropTypes.string,

	/** Error validation function */
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),

	/** Warning validation function */
	warn: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),

	/** onBlur handler */
	onBlur: PropTypes.func,

	/** onChange handler */
	onChange: PropTypes.func,

	/** onDragStart handler */
	onDragStart: PropTypes.func,

	/** onDrop handler */
	onDrop: PropTypes.func,

	/** onFocus handler */
	onFocus: PropTypes.func,

	/** the options to display in the select */
	children: PropTypes.node,

	/**
	 * Additional react-autocomplete props
	 * @see https://github.com/reactjs/react-autocomplete
	 */

	/** Specifiy whether or not to automatically highlight the top match in the dropdown */
	autoHighlight: PropTypes.bool,

	/** Props applied to the input element */
	inputProps: PropTypes.objectOf(PropTypes.any),

	/**
	 * Invoked when the dropdown menu's visibility changes. Arguments: isOpen: Boolean
	 */
	onMenuVisibilityChange: PropTypes.func,

	/**
	 * Invoked when the user selects an item. Arguments: value: String, item: Any
	 */
	onSelect: PropTypes.func,

	/**
	 * Invoked to generate the render tree for the dropdown menu. Arguments: items: Array<Any>, value: String, styles: Object
	 */
	renderMenu: PropTypes.func,

	/** Props applied to element wrapping the input and drowdown menu */
	wrapperProps: PropTypes.objectOf(PropTypes.any),

	/** Specify styles for element wrapping the input and drowdown menu */
	wrapperStyle: PropTypes.objectOf(PropTypes.any),

	/** Function to get an item caption based on the value */
	getCaptionFromValue: PropTypes.func,

	/** Function to get an item value based on the caption */
	getValueFromCaption: PropTypes.func,

	/** True when the suggestions for the autocomplete should show */
	open: PropTypes.bool,
};

export default AOAutocomplete;

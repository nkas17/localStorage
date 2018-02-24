import React from 'react';
import _ from 'lodash';

export const getItemValue = item => item.caption;

// Unique key used to make elements unique when looping.
let key = 0;

/**
 * Renders the caption so that substrings matching what the user typed are bold
 * http://regexr.com/3g8tg
 *
 * @param {string} caption - string to render
 * @returns {Node[]} - array of strings, potentially with bold tags around some
 */
export const renderCaption = (caption, inputValue) => {
	const escapedInputValue = inputValue.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	const findInputRegex = new RegExp(`(^${escapedInputValue})|(\\W)(${escapedInputValue})`, 'ig');
	const splitCaption = caption.split(findInputRegex);
	return _.reduce(splitCaption, (elementsSoFar, subCaption) => {
		if (_.isNil(subCaption)) {
			return elementsSoFar;
		}
		if (subCaption.toLowerCase() === inputValue.toLowerCase()) {
			return elementsSoFar.concat(<b key={++key}>{subCaption}</b>);
		}
		return elementsSoFar.concat(subCaption);
	}, []);
};

/**
 * Creates the default renderItem function which bolds
 * the parts of the caption matching inputValue.
 *
 * We use a higher-order function because we do not have control of the "input" in this scope
 *
 * @param {string} inputValue - value on the input tag
 */
export const renderItemGenerator = inputValue => (item, isHighlighted) => (
	<div
		key={++key}
		className={`arrf-autocomplete__item ${isHighlighted ? 'arrf-autocomplete__item--highlighted' : ''}`}
	>
		{renderCaption(item.caption, inputValue)}
	</div>
);

/**
 * Transforms the string to filter out unwanted formatting.
 * Currently changes the string to be lower case and replaces punctuation with spaces
 * @param {string} string
 * @returns {string} - the transformed string
 */
const _transformString = (string) => {
	const lowerCase = string.toLowerCase();
	const withoutPunctuation = lowerCase.replace(/[[\].,/#!$%^&*;:{}=\-_`~()\\]/g, ' ');
	return withoutPunctuation;
};
// / ^ *
// Items will appear in the menu if the value entered matches the beginning of a word from the caption or value
export const shouldItemRender = (item, currentValue) => {
	const transformedItemValue = _transformString(item.value);
	const transformedItemCaption = _transformString(item.caption);
	const transfoemdCurrentValue = _transformString(currentValue);
	return ` ${transformedItemValue} ${transformedItemCaption}`.toLowerCase().includes(` ${transfoemdCurrentValue}`);
};

// sort items by match position by default
// see https://github.com/reactjs/react-autocomplete/blob/master/lib/utils.js
export const sortItems = (a, b, value) => {
	const aLower = a.caption.toLowerCase();
	const bLower = b.caption.toLowerCase();
	const valueLower = value.toLowerCase();
	const queryPosA = aLower.indexOf(valueLower);
	const queryPosB = bLower.indexOf(valueLower);
	if (queryPosA !== queryPosB) {
		return queryPosA - queryPosB;
	}
	return aLower < bLower ? -1 : 1;
};

export const renderMenu = items => (
	<div className="arrf-autocomplete">{items}</div>
);

/**
 * Returns the caption to the item whose value property matches value.
 * If none are found returns the original value.
 *
 * @param {string} value - value to search for in the items
 * @param {object[]} items - array of items to query
 * @returns {string} - the caption to display
 */
export const getCaptionFromValue = (value, items) => {
	const itemWithValue = items.find(item => item.value === value);
	if (itemWithValue) {
		return itemWithValue.caption;
	}
	return value;
};

/**
 * Returns the value to the item whose caption property matches caption.
 * If none are found returns the original caption.
 *
 * @param {string} caption - caption to search for in the items
 * @param {object[]} items - array of items to query
 * @returns {string} - the value to store
 */
export const getValueFromCaption = (caption, items) => {
	const itemWithCaption = items.find(item => item.caption === caption);
	if (itemWithCaption) {
		return itemWithCaption.value;
	}
	return caption;
};

import _ from 'lodash';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Autocomplete from 'react-autocomplete';

/**
 * Renders the react-autocomplete
 * This component should be invoked by the redux-form Field component
 *
 * @component AutocompleteFormConnector
 * @import AutocompleteFormConnector
 * @see https://github.com/reactjs/react-autocomplete/blob/master/lib/Autocomplete.js
 */
/* eslint-disable react/prop-types */
const AutocompleteFormConnector = (props) => {
	const optionalAttributes = {};
	if (!_.isNil(props.open)) optionalAttributes.open = props.open;
	return (
		<ReactCSSTransitionGroup
			transitionName="onShow"
			transitionAppear={props.transition}
			transitionAppearTimeout={500}
			transitionEnter={false}
			transitionLeave={false}
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}
		>
			<Autocomplete
				inputProps={
					Object.assign({}, {
						className: `ao-textbox ${props.widthClassName} ${props.additionalClassNames} ${props.meta.touched && props.meta.error !== undefined
							? 'ao-error' : ''} ${props.meta.touched && props.meta.warning !== undefined ? 'ao-warning' : ''}`,
						name: props.input.name,
						id: props.id,
						onBlur: ({
							target: {
								value: caption,
							},
						}) => {
							const value = props.getValueFromCaption(caption, props.items);
							return props.input.onBlur(value);
						},
						onDragStart: props.input.onDragStart,
						onDrop: props.input.onDrop,
						onFocus: props.input.onFocus,
						placeholder: props.placeholder,
					}, props.inputProps)
				}
				value={props.getCaptionFromValue(props.input.value, props.items)}
				getItemValue={props.getItemValue}
				items={props.items}
				renderItem={props.renderItem || props.renderItemGenerator(props.getCaptionFromValue(props.input.value, props.items))}
				onChange={({
					target: {
						value: caption,
					},
				}) => {
					const value = props.getValueFromCaption(caption, props.items);
					return props.input.onChange(value);
				}}
				onSelect={(caption) => {
					const value = props.getValueFromCaption(caption, props.items);
					props.input.onChange(value);
					return props.onSelect(value);
				}}
				shouldItemRender={props.shouldItemRender}
				sortItems={props.sortItems}
				autoHighlight={props.autoHighlight}
				onMenuVisibilityChange={props.onMenuVisibilityChange}
				renderMenu={props.renderMenu}
				wrapperProps={props.wrapperProps}
				wrapperStyle={props.wrapperStyle}
				{...optionalAttributes}
			>
				{props.children}
			</Autocomplete>
		</ReactCSSTransitionGroup>
	);
};

export default AutocompleteFormConnector;

import React from 'react';
import PropTypes from 'prop-types';

const DataShareExampleView = ({
	id,
	name,
	clickHandler,
	error,
}) => (
	<div className="row">
		<div className="column">
			<div className="row">
				<div className="column large-12">
					<h3 className="ao-heading-300 ao-local-title ao-truncate-small ao-width-full-small">POC - Data Sharing</h3>
				</div>
			</div>
			<div className="row">
				<div className="column">
					<div className="ao-contentbox">
						<h4 className="ao-heading-400">Select new Customer</h4>
						<div className="ao-form-line-M">
							<input className="ao-textbox ao-height-48" id="custId" type="text" placeholder="Enter Customer Id"/>
							<button className="ao-button-primary" onClick={clickHandler}>search</button>
						</div>
						<div className="ao-form-line-M">
							{(error && <p>{error}</p>) ||
							<p>{`Customer Id ${id || ''} "the wall" ${name || ''}`}</p>}
						</div>
					</div>
					<div className="ao-contentbox">
						<h4 className="ao-heading-400">Additional Insured Autocomplete</h4>
						<div className="ao-form-line-M">
							<label htmlFor="additionalNamedInsured" className="ao-label-right">Search Additional Named Insureds</label>
							<input id="additionalNamedInsured" className="ao-textbox ao-width-XL ao-height-48" type="text" placeholder="Type For Additional Names" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

DataShareExampleView.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	clickHandler: PropTypes.func,
	error: PropTypes.string,
};

export default DataShareExampleView;

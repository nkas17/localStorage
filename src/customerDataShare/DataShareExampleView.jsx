import React from 'react';
import PropTypes from 'prop-types';
import AOAutocomplete from '../AOAutocomplete/AOAutocomplete';

const DataShareExampleView = ({
	id,
	name,
	clickHandler,
	error,
	additionalNames,
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
						<h4 className="ao-heading-400">Select a Customer</h4>
						<div className="ao-form-line-M">
							<select className="ao-textbox ao-width-XXS" id="custId" onChange={clickHandler}>
								<option>1</option>
								<option>2</option>
							</select>
						</div>
						<div className="ao-form-line-M">
							{(error && <p>{error}</p>) ||
								<p>{`Customer ${id || ''} - ${name || ''}`}</p>}
						</div>
					</div>
					<div className="ao-contentbox">
						<h4 className="ao-heading-400">Additional Insured Autocomplete</h4>
						<div className="ao-form-line-M">
							<label htmlFor="test2" className="ao-label-right">Search Additional Named Insureds</label>
							<AOAutocomplete
								additionalClassNames="ao-width-L"
								placeholder="Type For Additional Names"
								name="test2"
								id="test2"
								items={additionalNames}
							/>
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
	additionalNames: PropTypes.arrayOf(PropTypes.object),
};

export default DataShareExampleView;


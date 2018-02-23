import React from 'react';
import PropTypes from 'prop-types';

const DataShareSampleView = ({
	id,
	name,
	clickHandler,
	error,
}) => (
	<div className="row">
		<div className="column">
			<div className="row">
				<div className="column large-3 medium-4 small-12">
					{(error && <p>{error}</p>) ||
					<p>{`Customer Id ${id || ''} "the wall" ${name || ''}`}</p>}
					<input id="custId" type="text" />
					<button onClick={clickHandler}>get</button>
				</div>
			</div>
		</div>
	</div>
);

DataShareSampleView.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	clickHandler: PropTypes.func,
	error: PropTypes.string,
};

export default DataShareSampleView;


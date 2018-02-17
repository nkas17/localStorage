import React from 'react';
import {
	getCustomerDataShare,
} from './customerDataShare/customerDataShareLocalStore';

const DataShareExample = () => {
	const customerDataShare = getCustomerDataShare();
	return (
		<p>{`${customerDataShare.firstName} "the wall" ${customerDataShare.lastName}`}</p>
	);
};

export default DataShareExample;

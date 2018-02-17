import React from 'react';
import getCustomerDataShareApi from './customerDataShare/customerDataShareApi';
import {
	saveCustomerDataShare,
	getCustomerDataShare,
} from './customerDataShare/customerDataShareLocalStore';

const DataShareExample = () => {
	// get data then store it then get it back and display
	const data = getCustomerDataShareApi(1);
	console.log(data);
	saveCustomerDataShare(data);
	const customerDataShare = getCustomerDataShare();
	console.log(data);
	return (
		<p>{`${customerDataShare.firstName} "the wall" ${customerDataShare.lastName}`}</p>
	);
};

export default DataShareExample;

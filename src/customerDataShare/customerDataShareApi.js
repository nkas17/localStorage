/**
 * get data for customer data sharing
 * from external source
 * MOCKING FOR NOW
 */
const getCustomerDataShareApi = (id) => {
	if (id === 1) {
		return {
			firstName: 'John',
			lastName: 'Smith',
			id,
		};
	}
	return {
		firstName: 'George',
		lastName: 'Mirabal',
		id,
	};
};

export default getCustomerDataShareApi;

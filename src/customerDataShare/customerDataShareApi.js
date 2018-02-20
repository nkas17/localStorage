/**
 * get data for customer data sharing
 * from external source
 * MOCKING FOR NOW
 */

const handleResult = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return response.json().then(data => data);
	} else if (response.bodyUsed) {
		return response.json().then((data) => {
			const error = { error: `Response error for ${response.url}` };
			error.additionalData = data;
			return error;
		});
	} else if (response.status >= 400) {
		const error = { error: `Response error for ${response.url} - ${response.statusText}` };
		return error;
	}

	return new Error(`Response error for ${response.url}`);
};

class CustomerDataShareApi {
	static getMockCustomerDataShare(id) {
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
	}

	static getCustomerDataShare(id) {
		const url = `/customer-data-share/${id}`;
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		};

		return fetch(url, options)
			.then(handleResult)
			.catch(err => err);
	}
}

export default CustomerDataShareApi;

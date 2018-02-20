/**
 * save data to the local store
 */
import customerDataShareApi from './customerDataShareApi';

const CustomerDataShare = (function CustomerDataShare() {
	return {
		getCustomerDataShare: function getCustomerDataShare() {
			const customerData = JSON.parse(sessionStorage.getItem('customerDataShare'));
			if (customerData != null && !customerData.error) {
				return customerData;
			}
			return '';
		},
		getFirstName: function getFirstName() {
			const customerData = JSON.parse(sessionStorage.getItem('customerDataShare'));
			if (customerData != null && !customerData.error && customerData.firstName) {
				return customerData.firstName;
			}
			return '';
		},
		getLastName: function getLastName() {
			const customerData = JSON.parse(sessionStorage.getItem('customerDataShare'));
			if (customerData != null && !customerData.error && customerData.lastName) {
				return customerData.lastName;
			}
			return '';
		},
		getId: function getId() {
			const customerData = JSON.parse(sessionStorage.getItem('customerDataShare'));
			if (customerData !== null && !customerData.error && customerData.id) {
				return customerData.id;
			}
			return '';
		},
		setId: function setId(id) {
			return customerDataShareApi.getCustomerDataShare(id).then((data) => {
				sessionStorage.clear();
				sessionStorage.setItem('customerDataShare', JSON.stringify(data));
			});
		},
		getError: function getError() {
			const customerData = JSON.parse(sessionStorage.getItem('customerDataShare'));
			if (customerData !== null && customerData.error) {
				return customerData.error;
			}
			return '';
		},
	};
}());

export default CustomerDataShare;

/**
	* store api
	// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
var data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();
	*/

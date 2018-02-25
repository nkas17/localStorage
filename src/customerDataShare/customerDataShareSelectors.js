/**
 * save data to the local store
 */
import _ from 'lodash';
import customerDataShareApi from './customerDataShareApi';

// object that handles all the sessionStorage data access
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
			return sessionStorage.getItem('customerDataShareId');
		},

		setId: function setId(id) {
			sessionStorage.removeItem('customerDataShare');
			sessionStorage.removeItem('customerDataShareId');
			return customerDataShareApi.getCustomerDataShare(id).then((data) => {
				if (!data.error) {
					sessionStorage.setItem('customerDataShareId', id);
				}
				sessionStorage.setItem('customerDataShare', JSON.stringify(data));
			});
		},

		getAdditionalNames: function getAdditionalNames() {
			const customerData = JSON.parse(sessionStorage.getItem('customerDataShare'));
			if (customerData != null && !customerData.error && customerData.additionalInsuredNames) {
				const sortUniqNames = _.map(_.uniq(_.flattenDeep(customerData.additionalInsuredNames)), (item) => {
					return { caption: item, value: item };
				});
				return sortUniqNames;
			}
			return [];
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

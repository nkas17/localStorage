/**
 * save data to the local store
 */

export const saveCustomerDataShare = (data) => {
	sessionStorage.setItem('customerDataShare', JSON.stringify(data));
};

export const getCustomerDataShare = () => (
	JSON.parse(sessionStorage.getItem('customerDataShare'))
);

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

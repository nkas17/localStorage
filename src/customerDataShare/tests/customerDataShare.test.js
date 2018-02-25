
import CustomerDataShare from '../customerDataShareSelectors';
import custData from './custData.json';

const customers = [
	{ caption: 'Jen Spartan', value: 'Jen Spartan' },
	{ caption: 'Louie Huxley', value: 'Louie Huxley' },
	{ caption: 'Simon Atlanta', value: 'Simon Atlanta' },
	{ caption: 'John Spartan', value: 'John Spartan' },
	{ caption: 'Lanena Huxley', value: 'Lanena Huxley' },
	{ caption: 'Simon Phoenix', value: 'Simon Phoenix' },
];


describe("CustomerDataShare", () => {
	// set sessionstorage
	sessionStorage.setItem('customerDataShare', JSON.stringify(custData));
	it('retrieves the additional insureds for autocomplete', () => {
		expect(CustomerDataShare.getAdditionalNames()).toEqual(customers);
		sessionStorage.clear();
	});
});

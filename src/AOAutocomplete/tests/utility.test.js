import _ from 'lodash';
import { shouldItemRender, sortItems } from '../utility';

/** returns a function that calls shouldItemRender with an item and a fixed value */
const shouldItemRenderWithFixedValue = value => item => shouldItemRender(item, value);

describe('shouldItemRender', () => {
	it('returns all items when value is empty', () => {
		const items = [
			{ caption: 'test A', value: 'test A' },
			{ caption: 'test B', value: 'test B' },
			{ caption: 'test C', value: 'test C' },
		];
		const allTrue = _.every(items, shouldItemRenderWithFixedValue(''));
		expect(allTrue).toBe(true);
	});

	it('returns all items when value in all items', () => {
		const items = [
			{ caption: 'test A', value: 'test A' },
			{ caption: 'test B', value: 'test B' },
			{ caption: 'test C', value: 'test C' },
		];
		const allTrue = _.every(items, shouldItemRenderWithFixedValue('test'));
		expect(allTrue).toBe(true);
	});

	it('returns some items', () => {
		const items = [
			{ caption: 'a test', value: 'a test' },
			{ caption: 'another test', value: 'another test' },
			{ caption: 'b test', value: 'b test' },
		];
		const someTrue = _.some(items, shouldItemRenderWithFixedValue('a'));
		const allTrue = _.every(items, shouldItemRenderWithFixedValue('a'));
		expect(someTrue).toBe(true);
		expect(allTrue).toBe(false);
	});

	it('returns no items', () => {
		const items = [
			{ caption: 'test A', value: 'test A' },
			{ caption: 'test B', value: 'test B' },
			{ caption: 'test C', value: 'test C' },
		];
		const someTrue = _.some(items, shouldItemRenderWithFixedValue('d'));
		expect(someTrue).toBe(false);
	});

	it('returns items where value matches but caption does not', () => {
		const items = [
			{ caption: '', value: 'test A' },
			{ caption: '', value: 'test B' },
			{ caption: '', value: 'test C' },
		];
		const allTrue = _.every(items, shouldItemRenderWithFixedValue('test'));
		expect(allTrue).toBe(true);
	});

	it('returns items where caption matches but value does not', () => {
		const items = [
			{ caption: 'test A', value: '' },
			{ caption: 'test B', value: '' },
			{ caption: 'test C', value: '' },
		];
		const allTrue = _.every(items, shouldItemRenderWithFixedValue('test'));
		expect(allTrue).toBe(true);
	});

	it('returns items where some word starts with the value, but not items matching in the middle of a word', () => {
		const items = [
			{ caption: 'north carolina', value: '' },
			{ caption: 'oregon', value: '' },
		];
		const itemsToRender = _.filter(items, shouldItemRenderWithFixedValue('or'));
		expect(itemsToRender).toMatchSnapshot();
	});

	it('is case insensitive', () => {
		const items = [
			{ caption: 'CAPTION', value: '' },
			{ caption: 'caption', value: '' },
		];
		const allTrueLower = _.every(items, shouldItemRenderWithFixedValue('caption'));
		const allTrueUpper = _.every(items, shouldItemRenderWithFixedValue('CAPTION'));
		expect(allTrueLower).toBe(true);
		expect(allTrueUpper).toBe(true);
	});

	it('ignores punctuation', () => {
		const items = [
			{ caption: '[.,/#!$%^&*;:{}=-_`~()\\]Hello', value: '' },
		];
		const allTrue = _.every(items, shouldItemRenderWithFixedValue('Hello'));
		expect(allTrue).toBe(true);
	});
});

describe('sortItems', () => {
	it('returns alphabetical order when value has no match', () => {
		const itemA = { caption: 'A', value: 'A' };
		const itemB = { caption: 'B', value: 'B' };
		const firstItemLess = sortItems(itemA, itemB, '');
		const secondItemLess = sortItems(itemB, itemA, '');
		expect(firstItemLess).toBeLessThan(0);
		expect(secondItemLess).toBeGreaterThan(0);
	});

	it('returns positive when second arg has the earlier find position', () => {
		const itemA = { caption: 'north carolina', value: '' };
		const itemB = { caption: 'oregon', value: '' };
		const result = sortItems(itemA, itemB, 'or');
		expect(result).toBeGreaterThan(0);
	});

	it('returns negative when first arg has the earlier find position', () => {
		const itemA = { caption: 'oregon', value: '' };
		const itemB = { caption: 'north carolina', value: '' };
		const result = sortItems(itemA, itemB, 'or');
		expect(result).toBeLessThan(0);
	});
});

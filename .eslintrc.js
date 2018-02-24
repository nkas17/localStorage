module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	plugins: [
		'react',
	],
	extends: [
		'airbnb',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		'import/resolve': {
			extensions: [
				'.js',
				'.jsx',
			],
		},
	},
	rules: {
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/require-default-props': 'off',
		'max-len': 'off',
		'no-underscore-dangle': 'off',
		'no-plusplus': 'off',
		'jsx-a11y/no-static-element-interactions': 'warn',
		'func-names': 'error',
		'func-style': ['error', 'expression'],
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'ignore',
		}],
		'import/prefer-default-export': 'off',
		'react/prefer-stateless-function': 'warn',
		'no-undef': 'warn',
		'no-unused-vars': 'warn',
		'react/no-unused-prop-types': 'warn',
		'arrow-body-style': 'warn',
		'quotes': 'warn',
		'arrow-parens': 'warn',

		/**
		 * Allow the following files and folders to use references to devDependencies because they will only ever be used 
		 * in development and build time.
		 * 
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md#options
		 */
		'import/no-extraneous-dependencies': ['error', {'devDependencies': [
			'**/*.test.js', 
			'**/*.test.jsx', 
			'**/example/**', 
			'**/test-util/**',
		]}],

		/**
		 * The VSCode debugger doesn't recognize files with a .jsx extension (you can't debug them). But you can debug 
		 * files with a .js extension. So, some of our files will not have the correct filename extension simply because
		 * we would like to use the debugger. 
		 */
		'react/jsx-filename-extension': 'off',

		/**
		 * All anchor tags must have an href value. This doesn't make sense for the react router Link tag. 
		 * https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/339
		 * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md#rule-details
		 */
		'jsx-a11y/anchor-is-valid': [ 'error', {
			'components': [ 'Link' ],
			'specialLink': [ 'to', 'hrefLeft', 'hrefRight' ],
			'aspects': [ 'noHref', 'invalidHref', 'preferButton' ]
		}],
	},
};

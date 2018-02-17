module.exports = {
	"extends": [
		"airbnb",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	"plugins": [
	"react"
	],
	"parserOptions": {
	"ecmaVersion": 6,
	"sourceType": "module",
	"ecmaFeatures": {
		"jsx": true
	}
	},
	"env": {
	"es6": true,
	"browser": true,
	"node": true,
	"jquery": true,
	"mocha": true
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"react/jsx-indent": [
			"error",
			"tab"
		],
		"no-tabs": "off"
	}
};


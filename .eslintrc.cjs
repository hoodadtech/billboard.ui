/* eslint-disable */
module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	ignorePatterns: ['node_modules', 'types'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:storybook/recommended',
	],
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		React: 'writable',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		strict: ['off', 'safe'],
		'@typescript-eslint/ban-types': [
			'off',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		// disable es6 terms -- start
		'import/extensions': [
			'off',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-unresolved': [
			'off',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'react/react-in-jsx-scope': [
			'off',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-import-module-exports': 'off',
		'default-param-last': 'off',
		'no-unused-vars': 'off',
		'arrow-body-style': 'off',
		'arrow-parens': 'off',
		'arrow-spacing': 'off',
		'constructor-super': 'off',
		'generator-star-spacing': 'off',
		'no-class-assign': 'off',
		'no-confusing-arrow': 'off',
		'no-const-assign': 'off',
		'no-dupe-class-members': 'off',
		'no-duplicate-imports': 'off',
		'no-new-symbol': 'off',
		'no-restricted-imports': 'off',
		'no-this-before-super': 'off',
		'no-useless-computed-key': 'off',
		'no-useless-constructor': 'off',
		'no-useless-rename': 'off',
		'class-methods-use-this': 'off',
		'object-shorthand': 'off',
		'prefer-arrow-callback': 'off',
		'prefer-const': 'off',
		'prefer-destructuring': 'off',
		'prefer-numeric-literals': 'off',
		'prefer-reflect': 'off',
		'prefer-rest-params': 'off',
		'prefer-spread': 'off',
		'prefer-template': 'off',
		'require-yield': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'rest-spread-spacing': 'off',
		'sort-imports': 'off',
		'symbol-description': 'off',
		'template-curly-spacing': 'off',
		'yield-star-spacing': 'off',
		'global-require': 'off',
		'no-unresolved': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'react/prop-types': 'off',
		'css-modules/no-undef-class': 'off',
		'import/prefer-default-export': 'off',
		'tsx-filename-extension': 'off',
		'jsx-filename-extension': 'off',
		'filenames/match-exported': 'off',
		'no-use-before-define': 'off',
		'array-callback-return': 'off',
		'no-shadow': 'off',
		'no-param-reassign': 'off',
		'react/no-unescaped-entities': 'off',
		'consistent-return': 'off',
		camelcase: 'off',
		semi: 'off',
		'react/jsx-filename-extension': 'off',
		'comma-dangle': 'off',
		eqeqeq: 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-useless-concat': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-bitwise': 'off',
		'no-underscore-dangle': 'off',
		'no-plusplus': 'off',
		'no-case-declarations': 'off',
		'react/display-name': 'off',
		'no-nested-ternary': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'max-len': 'off',
		'func-names': 'off',
		'no-undefined': 'off',
		'no-unused-expressions': 'off',
		'react-hooks/exhaustive-deps': 'off',
		// disable es6 terms -- end
		'no-debugger': 'error',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-empty-function': 'warn',
		'react/jsx-key': 'warn',
		'no-console': 'warn',
		'no-else-return': 'warn',
		'spaced-comment': 'warn',
		'guard-for-in': 'error',
		'no-eval': 'error',
		'no-with': 'error',
		'valid-typeof': 'error',
		'no-continue': 'warn',
		'no-extra-semi': 'warn',
		'no-unreachable': 'warn',
		'react/prefer-es6-class': 'warn',
		'react/jsx-boolean-value': 'warn',
		'react-hooks/rules-of-hooks': 'error',
	},
};
/* eslint-enable */

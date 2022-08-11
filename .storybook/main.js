const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-designs',
		'@storybook/addon-actions',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
		'@storybook/addon-a11y',
	],
	framework: '@storybook/react',
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
		},
	},
	// Bundle splitting
	features: {
		storyStoreV7: true,
	},
	// support sass
	webpackFinal: async config => {
		// https://storybook.js.org/docs/react/configure/webpack#typescript-module-resolution
		config.resolve.plugins = [
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions,
			}),
		];
		return config;
	},
};

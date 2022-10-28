import * as React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { ThemeProvider } from './index';
import { Theme } from '../../styles/_theme';
import { Button } from '../../index';
import ErrorMessage from '../forms/error-message/error-message';

const meta: Meta = {
	title: 'Components/ThemeProvider',
	component: ThemeProvider,
};

export default meta;

const Template: ComponentStory<typeof ThemeProvider> = (args: any) => <ThemeProvider {...args} />;

export const Default = Template.bind({});

Default.args = {
	theme: { ...Theme, colors: { ...Theme.colors, errorColor: 'red', errorTransparentColor: 'blue' } },
	children: (
		<div>
			<b>Error Button</b> with color: red, background: blue
			<Button text="Button" variant="error" />
			<ErrorMessage errorMessage="text" />
		</div>
	),
};

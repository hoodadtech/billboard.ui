import { Story, Meta } from '@storybook/react';
import * as React from 'react';
import Example, { ExampleProps } from './index';

const meta: Meta = {
	title: 'Components/Example',
	component: Example,
};

export default meta;

const Template: Story<ExampleProps> = (args: any) => <Example {...args} />

export const Default = Template.bind({});

Default.args = {
	title: 'Title',
	description: 'Description',
};

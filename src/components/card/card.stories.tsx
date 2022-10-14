import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Card, CardProps } from './card';
import { ProfileIcon } from '../icons';

const meta: Meta = {
	title: 'Components/Card',
	component: Card,
	decorators: [withDesign],
};

export default meta;

const Template: Story<CardProps> = (args: any) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
	title: 'Leased Structures',
	description: '1400',
	icon: <ProfileIcon />,
	variant: 'pink',
};

Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=1404%3A9141',
	},
};

import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { RowLink, RowLinkProps } from './row-link';

const meta: Meta = {
	title: 'Components/RowLink',
	component: RowLink,
	decorators: [withDesign],
};

export default meta;

const Template: Story<RowLinkProps> = (args: any) => <RowLink {...args} />;

export const Default = Template.bind({});

Default.args = {
    numberRow:1,
    title:'Region#1',
    link:'google',
    infoRight:'informatin right'
};

Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=697%3A7004',
	},
};




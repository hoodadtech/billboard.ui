import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import CustomPagination, { CustomPaginationProps } from './pagination';

const meta: Meta = {
	title: 'Components/Pagination',
	component: CustomPagination,
	decorators: [withDesign],
};

export default meta;

const Template: Story<CustomPaginationProps> = (args: any) => <CustomPagination {...args} />;

export const Pagination = Template.bind({});

Pagination.args = {
	defaultCurrent: 1,
	total: 100,
};

Pagination.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=304%3A1283',
	},
};

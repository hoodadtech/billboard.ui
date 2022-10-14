import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Tag, TagProps } from './tag';

const meta: Meta = {
	title: 'Components/Tag',
	component: Tag,
	decorators: [withDesign],
};

export default meta;

const Template: Story<TagProps> = (args: any) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
	status: 'active',
	tag: 'Hello world',
};

Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=304%3A1308',
	},
};

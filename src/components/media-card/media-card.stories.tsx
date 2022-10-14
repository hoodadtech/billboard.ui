import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { MediaCard, MediaCardProps } from './media-card';

const meta: Meta = {
	title: 'Components/MediaCard',
	component: MediaCard,
	decorators: [withDesign],
};

export default meta;

const Template: Story<MediaCardProps> = (args: any) => <MediaCard {...args} />;

export const Default = Template.bind({});

Default.args = {
	mediaType: 'Bilboard',
	brandName: 'SunStar',
	date: '1400/12/15',
	ots: 1.6,
	dec: 2.3,
	lighting: true,
	type: 'leased',
};

Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=1805%3A10123',
	},
};

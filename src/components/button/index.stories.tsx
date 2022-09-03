import * as React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import Button, { CustomButtonProps } from './index';
import { ProfileIcon } from '../icons';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		onFocus: action('Focused'),
		variant: {
			control: {
				type: 'select',
				options: [
					'primary',
					'secondary',
					'tertiary',
					'textLine',
					'error',
					'transparent',
					'lightBlue',
					'gray',
					'success',
					'leased',
				],
			},
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'middle', 'large'],
			},
		},
	},
	decorators: [withDesign],
};

const Template: Story<CustomButtonProps> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	text: 'Default',
	size: 'middle',
	variant: 'primary',
	loading: false,
	disabled: false,
};

Primary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=1%3A547',
	},
};

export const Secondary = Template.bind({});
Secondary.args = {
	text: 'Default',
	size: 'middle',
	variant: 'secondary',
	loading: false,
	disabled: false,
};
Secondary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=1%3A614',
	},
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	text: 'Default',
	size: 'middle',
	variant: 'tertiary',
	loading: false,
	disabled: false,
};
Tertiary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=1%3A419',
	},
};

export const TextLine = Template.bind({});

TextLine.args = {
	text: 'Default',
	size: 'middle',
	variant: 'textLine',
	loading: false,
	disabled: false,
};
TextLine.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=1%3A656',
	},
};
export const Small = Template.bind({});

Small.args = {
	text: 'Default',
	size: 'small',
	variant: 'primary',
	loading: false,
	disabled: false,
};

Small.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=1%3A596',
	},
};
export const FilterButton = Template.bind({});
FilterButton.args = {
	text: 'filter',
	size: 'middle',
	variant: 'lightBlue',
	numFilter: 5,
};
FilterButton.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=304%3A1492',
	},
};

export const WithIcon = Template.bind({});

WithIcon.args = {
	text: 'Default',
	size: 'middle',
	variant: 'primary',
	icon: <ProfileIcon />,
	loading: false,
	disabled: false,
};

export const JustIcon = Template.bind({});

JustIcon.args = {
	text: '',
	variant: 'secondary',
	icon: <ProfileIcon />,
	loading: false,
	disabled: false,
};

export const WithIconRTL = Template.bind({});

WithIconRTL.args = {
	text: 'Default',
	size: 'middle',
	variant: 'primary',
	icon: <ProfileIcon />,
	direction: 'rtl',
};

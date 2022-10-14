import * as React from 'react';
import { Formik, Form } from 'formik';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { InputProps } from 'antd/es/input';
import FormControl, { FormikInputProps } from '../control';

const meta: Meta = {
	title: 'Components/Search',
	component: FormControl,
	argTypes: {
		onFocus: action('Focused'),
	},
	decorators: [withDesign],
};

export default meta;

const Template: Story<FormikInputProps & InputProps> = (args: any) => (
	<Formik
		initialValues={{ name: '' }}
		onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('name', values.name)}
	>
		{() => (
			<Form>
				<FormControl control="search" name="name" {...args} />
			</Form>
		)}
	</Formik>
);

export const Default = Template.bind({});

Default.args = {
	label: 'Empty Input',
};

Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=319%3A2438',
	},
};
export const Active = Template.bind({});
Active.args = {
	label: 'Active Input search',
	value: 'Active Input search',
};

Active.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=319%3A2450',
	},
};

export const HoverInputSearch = Template.bind({});
HoverInputSearch.args = {
	label: 'hover search',
	value: 'اhover',
};
HoverInputSearch.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=319%3A2444',
	},
};
export const FilledInputSearch = Template.bind({});

FilledInputSearch.args = {
	label: 'filled search',
	value: 'search in faild!!',
	disabled: true,
};

FilledInputSearch.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=319%3A2456',
	},
};

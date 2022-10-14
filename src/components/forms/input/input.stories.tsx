import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { InputProps } from 'antd/es/input';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

import FormControl, { FormikInputProps } from '../control';

const meta: Meta = {
	title: 'Components/input',
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
		onSubmit={values => {
			// eslint-disable-next-line no-console
			console.log(values);
		}}
	>
		{() => (
			<Form>
				<FormControl control="input" name="name" {...args} />
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
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=27%3A702',
	},
};

export const Small = Template.bind({});

Small.args = {
	label: 'Small Input',
	value: 'Small Input',
	size: 'small',
};

Small.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=62%3A504',
	},
};

export const InputErrorState = Template.bind({});

InputErrorState.args = {
	errorMessage: 'Long text caption ',
	label: 'Input Error State',
	value: 'Error in text',
};

InputErrorState.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=27%3A800',
	},
};

export const SmallInputErrorState = Template.bind({});

SmallInputErrorState.args = {
	errorMessage: 'Long text caption ',
	label: 'Input Error State',
	size: 'small',
	value: 'Error in text',
};

SmallInputErrorState.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=62%3A542',
	},
};

export const DisabledInput = Template.bind({});

DisabledInput.args = {
	label: 'Deactive Input',
	value: 'The text is gone!!',
	disabled: true,
};

DisabledInput.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=27%3A721',
	},
};

export const InputSuccessState = Template.bind({});

InputSuccessState.args = {
	label: 'Input Success State',
	value: 'Good to go!',
	className: 'success',
};

InputSuccessState.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=27%3A709',
	},
};

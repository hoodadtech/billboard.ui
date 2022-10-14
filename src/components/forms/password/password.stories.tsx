import * as React from 'react';
import { Formik, Form } from 'formik';
import { Story, Meta } from '@storybook/react';
import { InputProps } from 'antd/es/input';
import FormControl, { FormikInputProps } from '../control';

const meta: Meta = {
	title: 'Components/Password',
	component: FormControl,
};

export default meta;

const Template: Story<FormikInputProps & InputProps> = (args: any) => (
	<Formik
		initialValues={{ name: '' }}
		onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('name', values.name)}
	>
		{() => (
			<Form>
				<FormControl control="password" name="name" {...args} />
			</Form>
		)}
	</Formik>
);

export const Default = Template.bind({});

Default.args = {
	label: 'Password',
};

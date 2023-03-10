import * as React from 'react';
import { Formik, Form } from 'formik';
import { Meta } from '@storybook/react';
import FormControl from '../control';

const meta: Meta = {
	title: 'Components/Switch',
	component: FormControl,
};

export default meta;

export const _Switch = (): React.ReactElement => (
	<Formik
		initialValues={{ switch: '3' }}
		onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('switch', values.switch)}
	>
		{formikHelpers => (
			<Form>
				<FormControl
					onChange={value => formikHelpers.setFieldValue('switch', value)}
					control="switch"
					name="switch"
					label="Hello world"
				/>
			</Form>
		)}
	</Formik>
);

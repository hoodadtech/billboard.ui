import * as React from 'react';
import { Formik, Form } from 'formik';
import { Meta } from '@storybook/react';
import { Radio } from 'antd';
import FormControl from '../control';

const meta: Meta = {
	title: 'Components/Radio',
	component: FormControl,
};

export default meta;

export const _Radio = (): React.ReactElement => (
	<Formik
		initialValues={{ radio: '3' }}
		onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('radio', values.radio)}
	>
		{formikHelpers => (
			<Form>
				<FormControl
					onChange={e => formikHelpers.setFieldValue('radio', e.target.value)}
					control="radio"
					name="radio"
					label="Hello world"
				>
					{[
						{
							label: 'hello world 2',
							value: '2',
						},
						{
							label: 'hello world 3',
							value: '3',
						},
					].map((option, index) => (
						<Radio key={index} {...option}>
							{option.label}
						</Radio>
					))}
				</FormControl>
			</Form>
		)}
	</Formik>
);

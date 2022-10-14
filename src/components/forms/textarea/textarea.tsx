import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import { FormikInputProps } from '../control';
import { TextareaStyle } from './textarea.style';
import { Label } from '../label/label';
import { CustomErrorMessage } from '../error-message/error-message';

const { TextArea } = Input;

export const _TextArea = ({ field, ...rest }: TextAreaProps & FieldProps): React.ReactElement => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	delete rest?.form;

	return <TextArea {...field} {...rest} bordered />;
};

export const FormikTextarea = ({
	label,
	name,
	errorMessage,
	...rest
}: TextAreaProps & FormikInputProps): React.ReactElement => (
	<TextareaStyle>
		<Label label={label} htmlFor={name} />
		<Field name={name} as={'textarea'} component={_TextArea} label={label} {...rest} />
		<CustomErrorMessage errorMessage={errorMessage} />
	</TextareaStyle>
);

import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from 'antd';
import { InputProps } from 'antd/es/input';
import { FormikInputProps } from '../control';
import { SearchStyle } from '../search/search.style';
import { Label } from '../label/label';
import { CustomErrorMessage } from '../error-message/error-message';

export const _Input = ({ field, ...rest }: InputProps & FieldProps): React.ReactElement => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	delete rest?.form;

	return <Input.Password {...field} {...rest} allowClear />;
};

export const FormikPassword = ({
	label,
	name,
	errorMessage,
	control,
	size,
	...rest
}: FormikInputProps & InputProps): React.ReactElement => (
	<SearchStyle size={size} className="password">
		<Label label={label} htmlFor={name} />
		<Field name={name} as={control} component={_Input} label={label} {...rest} />
		<CustomErrorMessage errorMessage={errorMessage} />
	</SearchStyle>
);

import React from 'react';
import { Field, FieldProps } from 'formik';
import { AutoComplete, AutoCompleteProps } from 'antd';
import { FormikInputProps } from '../control';
import { AutoCompleteStyle } from './auto-complete.style';
import { Label } from '../label/label';
import { CustomErrorMessage } from '../error-message/error-message';

export const _Input = ({ field, ...rest }: AutoCompleteProps & FieldProps): React.ReactElement => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	delete rest?.form

	return (
		<AutoComplete  {...field} {...rest} allowClear={false} />
	);
}

export const FormikAutoComplete = ({
	label,
	name,
	errorMessage,
	control,
	size,
	...rest
}: FormikInputProps & AutoCompleteProps): React.ReactElement => (
	<AutoCompleteStyle size={size}>
		<Label label={label} htmlFor={name} />
		<Field
			name={name}
			as={control}
			component={_Input}
			label={label}
			{...rest}
			className={`${rest.className || ''} ${errorMessage ? 'error' : ''}`}
		/>
		{errorMessage && <CustomErrorMessage errorMessage={errorMessage} />}
	</AutoCompleteStyle>
);

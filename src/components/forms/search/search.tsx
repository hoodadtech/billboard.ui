import React, { useContext } from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from 'antd';
import { InputProps } from 'antd/es/input';
import { FormikInputProps } from '../control';
import { SearchStyle } from './search.style';
import { Label } from '../label/label';
import { CustomErrorMessage } from '../error-message/error-message';
import { SearchIcon } from '../../icons';
import { ThemeContext } from '../../theme-provider';

export const _Input = ({ field, ...rest }: InputProps & FieldProps): React.ReactElement => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	delete rest?.form;

	return <Input.Search {...field} {...rest} allowClear />;
};

export const FormikSearch = ({
	label,
	name,
	errorMessage,
	control,
	size,
	...rest
}: FormikInputProps & InputProps): React.ReactElement => {
	const theme = useContext(ThemeContext);

	return (
		<SearchStyle theme={theme} size={size} className="formik-search-input">
			<Label label={label} htmlFor={name} />
			<Field
				name={name}
				as={control}
				component={_Input}
				label={label}
				placeholder="Search ..."
				{...rest}
				prefix={<SearchIcon />}
				className={`${rest.className || ''} ${errorMessage ? 'error' : ''}`}
			/>
			{errorMessage && <CustomErrorMessage errorMessage={errorMessage} />}
		</SearchStyle>
	);
};

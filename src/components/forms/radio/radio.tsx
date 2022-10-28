import React, { useContext } from 'react';
import { Field, FieldProps } from 'formik';
import { Radio, Space, RadioGroupProps } from 'antd';
import { FormikInputProps } from '../control';
import { RadioStyle } from './radio.style';
import { Label } from '../label/label';
import { CustomErrorMessage } from '../error-message/error-message';
import { ThemeContext } from '../../theme-provider';

export const _Radio = ({ field, children, ...rest }: RadioGroupProps & FieldProps): React.ReactElement => (
	<Radio.Group {...field} {...rest}>
		<Space direction={'horizontal'}>{children}</Space>
	</Radio.Group>
);

export const FormikRadio = ({
	label,
	name,
	errorMessage,
	...rest
}: RadioGroupProps & FormikInputProps): React.ReactElement => {
	const theme = useContext(ThemeContext);

	return (
		<RadioStyle theme={theme}>
			<Label label={label} htmlFor={name} />
			<Field name={name} component={_Radio} label={label} {...rest} />
			<CustomErrorMessage errorMessage={errorMessage} />
		</RadioStyle>
	);
};

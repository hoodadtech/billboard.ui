import React, { useContext } from 'react';
import { Field, FieldProps } from 'formik';
import { Switch, SwitchProps } from 'antd';
import { FormikInputProps } from '../control';
import { SwitchStyle } from './switch.style';
import { Label } from '../label/label';
import { ThemeContext } from '../../theme-provider';

export const _Switch = ({
	field,
	label,
	...rest
}: SwitchProps & FieldProps & { label?: string }): React.ReactElement => (
	<label>
		<Switch {...field} {...rest} />
		<span>{label && label}</span>
	</label>
);

export const FormikSwitch = ({
	label,
	name,
	errorMessage,
	...rest
}: SwitchProps & FormikInputProps): React.ReactElement => {
	const theme = useContext(ThemeContext);

	return (
		<SwitchStyle theme={theme}>
			<Label label={label} htmlFor={name} />
			<Field name={name} component={_Switch} label={label} {...rest} />
			<span>{errorMessage}</span>
		</SwitchStyle>
	);
};

import React, { useContext } from 'react';
import { LabelStyle } from './label.style';
import { ThemeContext } from '../../theme-provider';

interface LabelProps {
	label?: string;
	htmlFor?: string;
}

export const Label = ({ label, htmlFor }: LabelProps): React.ReactElement | null => {
	const theme = useContext(ThemeContext);
	if (label) {
		return (
			<LabelStyle theme={theme}>
				<label htmlFor={htmlFor}>{label}</label>
			</LabelStyle>
		);
	}
	return null;
};

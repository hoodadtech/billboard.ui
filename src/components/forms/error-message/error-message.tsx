import React, { useContext } from 'react';
import { ErrorMessageStyle } from './error-message.style';
import { ThemeContext } from '../../theme-provider';

export const CustomErrorMessage = ({ errorMessage }: { errorMessage?: string }): React.ReactElement | null => {
	const theme = useContext(ThemeContext);

	return <ErrorMessageStyle theme={theme}>{errorMessage}</ErrorMessageStyle>;
};

export default CustomErrorMessage;

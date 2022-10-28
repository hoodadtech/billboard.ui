import React from 'react';
import { Theme, ThemeInterface } from 'src/styles/_theme';

const ThemeContext = React.createContext<ThemeInterface>(Theme);

export interface Props {
	theme?: ThemeInterface;
}

const ThemeProvider: React.FunctionComponent<Props> = props => {
	const { theme = {} } = props;

	return <ThemeContext.Provider value={{ ...Theme, ...theme }}>{props.children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };

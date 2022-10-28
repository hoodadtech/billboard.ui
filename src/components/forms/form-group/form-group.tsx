import React, { CSSProperties, useContext } from 'react';
import { FormGroupStyle } from './form-group.style';
import { ThemeContext } from '../../theme-provider';

export interface FormGroupProps {
	title?: string;
	description?: React.ReactNode;
	children: React.ReactNode;
	style?: CSSProperties;
	flexDirection?: 'row' | 'column';
}

export const FormGroup = ({
	title,
	description,
	children,
	style,
	flexDirection,
}: FormGroupProps): React.ReactElement | null => {
	const theme = useContext(ThemeContext);
	return (
		<FormGroupStyle theme={theme} style={style} flexDirection={flexDirection}>
			{title && (
				<div className="form-group">
					<div className="form-group--title">{title}</div>
					{description && <div className="form-group--description">{description}</div>}
				</div>
			)}

			<div className="form-group--inputs">{children}</div>
		</FormGroupStyle>
	);
};

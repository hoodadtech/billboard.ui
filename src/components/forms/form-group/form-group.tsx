import React, { CSSProperties } from 'react';
import { FormGroupStyle } from './form-group.style';

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
	return (
		<FormGroupStyle style={style} flexDirection={flexDirection}>
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

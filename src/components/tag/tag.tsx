import React, { useContext } from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { TagStyle } from './tag.style';
import { ThemeContext } from '../theme-provider';

export interface TagProps {
	tag?: string | React.ReactElement;
	status?:
		| 'successBold'
		| 'suspended'
		| 'active'
		| 'warning'
		| 'success'
		| 'error'
		| 'primary'
		| 'secondary'
		| 'gray'
		| 'leased'
		| undefined;
	size?: SizeType;
}

export const Tag = ({ status, tag, size }: TagProps): React.ReactElement => {
	const theme = useContext(ThemeContext);

	return (
		<TagStyle theme={theme} status={status} size={size}>
			{tag}
		</TagStyle>
	);
};

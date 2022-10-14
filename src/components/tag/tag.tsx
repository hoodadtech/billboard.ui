import React from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { TagStyle } from './tag.style';

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

export const Tag = ({ status, tag, size }: TagProps): React.ReactElement => (
	<TagStyle status={status} size={size}>
		{tag}
	</TagStyle>
);

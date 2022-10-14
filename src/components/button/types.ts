import { ButtonProps } from 'antd';
import React from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';

export interface CustomButtonProps extends ButtonProps {
	text?: string | React.ReactElement;
	variant:
		| 'successBold'
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'textLine'
		| 'error'
		| 'transparent'
		| 'lightBlue'
		| 'gray'
		| 'success'
		| 'leased'
		| undefined;
	size?: SizeType;
	icon?: {
		width: number;
		height: number;
		src: string;
	};
	isDropDown?: boolean;
	numFilter?: number;
	type?: any;
	direction?: 'rtl' | 'ltr';
	fullWidth?: boolean;
	isDesktopText?: boolean;
	isMobileIcon?: boolean;
}

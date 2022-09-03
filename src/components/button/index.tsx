import React from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ButtonProps } from 'antd';
import { ButtonStyle } from './index.style';
import { ArrowIcon, LoadingIcon } from '../icons';

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

	// TODO:: fix icon type
	icon?: any;
	isDropDown?: boolean;
	numFilter?: number;
	type?: any;
	direction?: 'rtl' | 'ltr';
	fullWidth?: boolean;
	isDesktopText?: boolean;
	isMobileIcon?: boolean;
}

const Button: React.FunctionComponent<CustomButtonProps> = props => {
	const CustomIcon = props.icon;

	return (
		<ButtonStyle
			variant={props.variant}
			size={props.size}
			loading={props.loading}
			disabled={props.disabled}
			type={props.type}
			onClick={props.onClick}
			numFilter={props.numFilter}
			direction={props.direction}
			className={props.className}
			fullWidth={props.fullWidth}
			isDesktopText={props.isDesktopText}
			isMobileIcon={props.isMobileIcon}
		>
			{CustomIcon && !props.loading && (
				<div className="left-icon">{props.loading ? <LoadingIcon width={24} height={24} /> : <CustomIcon />}</div>
			)}
			{props.loading && (
				<div className="left-icon">
					<LoadingIcon width={24} height={24} />
				</div>
			)}
			{props.text && <span className="text">{props.text}</span>}
			{props.numFilter && <span className="numFilter">{props.numFilter}</span>}
			{props.isDropDown && (
				<div className="dropdown-icon">
					<ArrowIcon />
				</div>
			)}
		</ButtonStyle>
	);
};

export default Button;

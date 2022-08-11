import React from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ButtonProps } from 'antd';
import { ButtonStyle } from './index.style';
import { ArrowIcon } from '../icons/ArrowIcon';
import loadingIcon from '../../assets/images/loading.svg';

// @ts-ignore
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

const CustomButton: React.FunctionComponent<CustomButtonProps> = props => {
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
			{props.icon && !props.loading && (
				<div className="left-icon">
					<img {...props.icon} src={props.loading ? loadingIcon : props.icon.src} alt="" />
				</div>
			)}
			{props.loading && (
				<div className="left-icon">
					<img width={20} height={20} src={loadingIcon} alt="" />
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

export default CustomButton;

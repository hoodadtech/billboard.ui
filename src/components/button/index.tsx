import React, { useContext } from 'react';
import { ButtonStyle } from './index.style';
import { ArrowIcon, LoadingIcon } from '../icons';
import { CustomButtonProps } from './types';
import { ThemeContext } from '../theme-provider';

const Button: React.FunctionComponent<CustomButtonProps> = props => {
	const theme = useContext(ThemeContext);
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
			theme={theme}
		>
			{props.icon && !props.loading && (
				<div className="left-icon">
					{props.loading ? <LoadingIcon width={24} height={24} /> : <img {...props.icon} src={props.icon.src} alt="" />}
				</div>
			)}
			{props.loading && (
				<div className="left-icon">
					<LoadingIcon width={24} height={24} />
				</div>
			)}
			{props.text && <span className="text">{props.text}</span>}
			{props.numFilter || props.numFilter === 0 ? <span className="numFilter">{props.numFilter}</span> : null}
			{props.isDropDown && (
				<div className="dropdown-icon">
					<ArrowIcon />
				</div>
			)}
		</ButtonStyle>
	);
};

export default Button;

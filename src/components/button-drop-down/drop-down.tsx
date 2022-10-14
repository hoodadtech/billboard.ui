import { Menu, Button } from 'antd';
import * as React from 'react';
import { DropDownStyle } from './drop-down.style';
import CustomButton from '../button';
import { CustomButtonProps } from '../button/types';

export interface DropdownProps extends CustomButtonProps {
	menu: { title: string; key: string }[];
	placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
	onSelectItem: (key: string) => void;
}

const CustomDropDown = (props: DropdownProps) => {
	const antMenu = (
		<Menu style={{ scrollPaddingRight: 20 }}>
			{props.menu.map(item => (
				<Menu.Item key={item.key} onClick={() => props.onSelectItem(item.key)}>
					{item.title}
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<DropDownStyle overlay={antMenu} placement={props.placement}>
			<Button className="antd-dropdown--button">
				<CustomButton
					isDesktopText={props.isDesktopText}
					isMobileIcon={props.isMobileIcon}
					type={props.type}
					variant={props.variant}
					size={props.size}
					text={props.text}
					isDropDown
					icon={props.icon}
				/>
			</Button>
		</DropDownStyle>
	);
};

export default CustomDropDown;

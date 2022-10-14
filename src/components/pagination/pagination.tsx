import React from 'react';
import Image from '../image';
import Pagination from 'antd/es/pagination';
import { PaginationProps } from 'antd';
import { PaginationStyle } from './pagination.styles';
import { ArrowIcon } from '../icons';

export interface CustomPaginationProps extends PaginationProps {
	defaultCurrent?: number;
	total?: number;
	justifyContent?: 'left' | 'right' | 'center';
	widthButtons?: boolean;
}

export const CustomPagination = ({ justifyContent = 'left', ...rest }: CustomPaginationProps): React.ReactElement => {
	function itemRender(
		page: number,
		type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
		element: React.ReactNode,
	) {
		if (type === 'prev') {
			return (
				<a>
					<ArrowIcon style={{ transform: 'rotate(181deg)' }} />
					Previous
				</a>
			);
		}
		if (type === 'next') {
			return (
				<a>
					Next
					<ArrowIcon />
				</a>
			);
		}
		return element;
	}

	return (
		<PaginationStyle justifyContent={justifyContent}>
			<Pagination {...rest} itemRender={itemRender} />
		</PaginationStyle>
	);
};

export default CustomPagination;

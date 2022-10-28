import React, { useContext } from 'react';
import { Table, TableProps } from 'antd';
import { TableWrapper, TableWrapperProps } from './table.style';
import { ThemeContext } from '../theme-provider';

const CustomTable = (props: TableProps<{}> & TableWrapperProps) => {
	const theme = useContext(ThemeContext);

	return (
		<TableWrapper theme={theme} fullPage={props.fullPage} differenceHeight={props.differenceHeight}>
			<Table pagination={false} {...props} />
		</TableWrapper>
	);
};

export default CustomTable;

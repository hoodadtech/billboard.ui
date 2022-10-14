import React from 'react';
import { Table, TableProps } from 'antd';
import { TableWrapper, TableWrapperProps } from './table.style';

const CustomTable = (props: TableProps<{}> & TableWrapperProps) => (
	<TableWrapper fullPage={props.fullPage} differenceHeight={props.differenceHeight}>
		<Table pagination={false} {...props} />
	</TableWrapper>
);

export default CustomTable;

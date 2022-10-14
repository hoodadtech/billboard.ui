import React from 'react';
import { Story } from '@storybook/react';
import { TableProps } from 'antd';
import Table from './table';

export default {
	title: 'Components/Table',
	component: Table,
};

const Template: Story<TableProps<{}>> = (args: any) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
	columns: [
		{
			title: 'Name',
			dataIndex: 'name',
			render: (text: string) => <a>{text}</a>,
		},
		{
			title: 'Age',
			dataIndex: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
	],
	dataSource: [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
		},
		{
			key: '4',
			name: 'Disabled User',
			age: 99,
			address: 'Sidney No. 1 Lake Park',
		},
	],
	rowSelection: {
		type: 'checkbox',
	},
};

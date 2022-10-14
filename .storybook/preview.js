import 'antd/dist/antd.css';
import { GlobalStyle } from '../src';

const rtlCanvas = Story => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
		}}
	>
		<GlobalStyle />
		<Story />
	</div>
);

export const decorators = [rtlCanvas];

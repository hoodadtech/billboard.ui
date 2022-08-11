const rtlCanvas = Story => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
		}}
	>
		<Story />
	</div>
);

export const decorators = [rtlCanvas];

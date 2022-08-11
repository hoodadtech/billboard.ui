import React from 'react';

export interface ExampleProps {
	title: string;
	description: string;
}

const Example: React.FunctionComponent<ExampleProps> = Props => {
	return (
		<div>
			<p>title: {Props.title}</p>
			Example
			<p>description: {Props.description}</p>
		</div>
	);
};

export default Example;

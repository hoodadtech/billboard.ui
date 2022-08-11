import React, { SVGProps } from 'react';

export const LoadingIcon = (props?: SVGProps<SVGSVGElement>): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
		width="24px"
		height="24px"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
		{...props}
	>
		<circle cx="50" cy="50" r="0" fill="none" stroke="#251873" strokeWidth="2">
			<animate
				attributeName="r"
				repeatCount="indefinite"
				dur="1s"
				values="0;40"
				keyTimes="0;1"
				keySplines="0 0.2 0.8 1"
				calcMode="spline"
				begin="-0.5s"
			></animate>
			<animate
				attributeName="opacity"
				repeatCount="indefinite"
				dur="1s"
				values="1;0"
				keyTimes="0;1"
				keySplines="0.2 0 0.8 1"
				calcMode="spline"
				begin="-0.5s"
			></animate>
		</circle>
		<circle cx="50" cy="50" r="0" fill="none" stroke="#38327c" strokeWidth="2">
			<animate
				attributeName="r"
				repeatCount="indefinite"
				dur="1s"
				values="0;40"
				keyTimes="0;1"
				keySplines="0 0.2 0.8 1"
				calcMode="spline"
			></animate>
			<animate
				attributeName="opacity"
				repeatCount="indefinite"
				dur="1s"
				values="1;0"
				keyTimes="0;1"
				keySplines="0.2 0 0.8 1"
				calcMode="spline"
			></animate>
		</circle>
	</svg>
);

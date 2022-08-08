import React, { SVGProps } from 'react';

export const PlusIcon = (props?: SVGProps<SVGSVGElement>) => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			opacity="0.4"
			d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5Z"
			fill="white"
		/>
		<path
			d="M12 8.4375H9.5625V6C9.5625 5.6925 9.3075 5.4375 9 5.4375C8.6925 5.4375 8.4375 5.6925 8.4375 6V8.4375H6C5.6925 8.4375 5.4375 8.6925 5.4375 9C5.4375 9.3075 5.6925 9.5625 6 9.5625H8.4375V12C8.4375 12.3075 8.6925 12.5625 9 12.5625C9.3075 12.5625 9.5625 12.3075 9.5625 12V9.5625H12C12.3075 9.5625 12.5625 9.3075 12.5625 9C12.5625 8.6925 12.3075 8.4375 12 8.4375Z"
			fill="white"
		/>
	</svg>
);

export const WhitePlusIcon = (props?: SVGProps<SVGSVGElement>) => (
	<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M1 5H9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M5 9V1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

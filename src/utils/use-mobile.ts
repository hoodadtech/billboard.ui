import { useEffect, useState } from 'react';

export const useMobileMode = (breakPoint: number) => {
	const [mobileMode, setMobileMode] = useState<boolean>(false);

	const checkSize = () => {
		setMobileMode(window.innerWidth <= breakPoint);
	};
	useEffect(() => {
		window.addEventListener('resize', () => checkSize());
		checkSize();
		return window.removeEventListener('resize', () => checkSize());
	}, [breakPoint]);

	return mobileMode;
};

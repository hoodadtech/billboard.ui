import * as React from 'react';
import { ImageStyle } from './index.style';

export interface ImageProps {
	src: string;
	alt?: string;
	className?: string;
	id?: string;
	rest?: unknown;
	loading?: 'lazy' | 'eager';
	width?: number;
	height?: number;
}

const Image = ({ src, alt, ...rest }: ImageProps): JSX.Element => {
	const onLoad = (event: any): void => event.target.classList.add('image-loaded');

	const onError = (event: any): void => event.target.classList.add('image-has-error');

	return <ImageStyle loading="lazy" src={src} alt={alt} onLoad={onLoad} onError={onError} {...rest} />;
};

export default Image;

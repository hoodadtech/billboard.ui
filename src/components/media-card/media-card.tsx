import React from 'react';
import Image from '../image';
import { Carousel } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { MediaCardStyles } from './media-card-styles';
import { Tag } from '../tag/tag';
import ButtonCustom from '../button';

export interface MediaCardProps {
	brandName?: string;
	ots?: number;
	dec?: number;
	lighting?: boolean | string;
	mediaSize?: string;
	date?: string;
	mediaType: string;
	usefulDays?: number;
	size?: SizeType;
	mediaCode: string;
	mediaId: string;
	buttonCallback?: () => void;
	removeMarker?: () => void;
	buttonText?: string;
	showButton?: boolean;
	selected?: boolean;
	images?: string[];
	type:string
}

export const MediaCard = (props: MediaCardProps): React.ReactElement => {
	const [selected, setSelected] = React.useState(props.selected);
	const selectedCard = document.querySelector(`.media-marker-${props.mediaId}`);

	React.useEffect(() => {
		setSelected(selectedCard?.classList.contains(`${props.mediaType}-selected`));
	}, [selected]);

	const getType = (): 'gray' | 'leased' | 'primary' | 'successBold' => {
		if (selected) {
			return 'successBold';
		}

		switch (props.type) {
			case 'leased':
				return 'leased';
			case 'free':
			case 'active':
				return 'primary';
			case 'reserved':
			default:
				return 'gray';
		}
	};
	const prevArrow = () => (
		<span>
			<Image
				className="prevIcon iconCarousel"
				width={18}
				height={18}
				src={'/static/assets/images/icons/arrow-left.svg'}
				alt=""
			/>
		</span>
	);
	const nextArrow = () => (
		<span>
			<Image
				className="nextIcon iconCarousel"
				width={18}
				height={18}
				src={'/static/assets/images/icons/arrow-right.svg'}
				alt=""
			/>
		</span>
	);

	const onSelectCard = () => {
		const selectedCard = document.querySelector(`.media-marker-${props.mediaId}`);
		if (selected) {
			selectedCard?.classList.remove(`${props.mediaType}-selected`);
		} else {
			selectedCard?.classList.add(`${props.mediaType}-selected`);
		}

		if (selected) {
			props.removeMarker?.();
		} else {
			props.buttonCallback?.();
		}
		setSelected(!selected);
	};

	return (
		<MediaCardStyles size={props.size}>
			<div className="carousel">
				<Carousel arrows prevArrow={prevArrow()} nextArrow={nextArrow()} dots={false}>
					{props.images?.map((image, index) => (
						<Image key={index} width={200} height={102} alt="" src={image} />
					))}
				</Carousel>
			</div>
			<div className="rows">
				<div className="row">
					<div className="billboard-id">{props.mediaCode}</div>
					<Tag size="small" status={getType()} tag={props.mediaType?.replaceAll('_', ' ')} />
				</div>
				{props.brandName ? (
					<div className="row brand">
						<span className="brand-name">{props.brandName}</span>
						<span className="billboard-date">{props.date}</span>
					</div>
				) : null}
				{props.ots ? (
					<div className="row">
						<span className="title">OTS :</span>
						<span className="data">{props.ots} Km</span>
					</div>
				) : null}
				{props.dec ? (
					<div className="row">
						<span className="title">DEC :</span>
						<span className="data">{props.dec.toLocaleString('en-US')}</span>
					</div>
				) : null}
				{typeof props.lighting !== 'undefined' ? (
					<div className="row">
						<span className="title">Lighting :</span>
						<span className="data">{props.lighting == true ? 'Yes' : 'No'}</span>
					</div>
				) : null}
				{props.mediaSize ? (
					<div className="row">
						<span className="title">Size (m²) : </span>
						<span className="data">{props.mediaSize}</span>
					</div>
				) : null}
				{props.usefulDays ? (
					<div className="row">
						<span className="title">Useful Days : </span>
						<span className="data">{props.usefulDays}</span>
					</div>
				) : null}

				<div>
					{props.showButton ? (
						props.buttonCallback ? (
							<ButtonCustom
								onClick={onSelectCard}
								fullWidth
								size="small"
								variant={getType()}
								type="button"
								disabled={props.type !== 'free' && !selected && !props.selected}
								text={props.buttonText || (selected ? 'Selected' : 'Select')}
							/>
						) : (
							<a href={`/admin/media/${props.mediaId}`} target="_blank" rel="noopener noreferrer">
								<ButtonCustom fullWidth size="small" variant={getType()} type="button" text={'Details'} />
							</a>
						)
					) : null}
				</div>
			</div>
		</MediaCardStyles>
	);
};

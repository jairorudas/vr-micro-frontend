import { IProduct } from '../../../interfaces';

interface ICard {
	thumbnail: string;
	price: string;
	title: string;
	description: string;
	id: string;
}

interface ItemCard {
	data: IProduct;
	// eslint-disable-next-line @typescript-eslint/ban-types
	action: Function;
}

export type { ICard, ItemCard };

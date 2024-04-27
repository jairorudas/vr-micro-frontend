import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces';

interface ProductState {
	items: IProduct[];
}

const initialState: ProductState = {
	items: [],
};

export const ProductsSlice = createSlice({
	name: 'productsList',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.items = [...state.items, ...action.payload];
		},
	},
});

export const { setProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;

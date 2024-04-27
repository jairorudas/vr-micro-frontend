import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definindo a interface para o produto
interface IProduct {
	title: string;
	price: number; // Mudando o tipo de string para number para representar preços corretamente
}

// Definindo a interface para o estado
interface ProductState {
	productSelected: IProduct[];
}

// Estado inicial com o tipo definido
const initialState: ProductState = {
	productSelected: [],
};

export const buySlice = createSlice({
	name: 'preBuy',
	initialState,
	reducers: {
		addProductToPreBuy: (state, action: PayloadAction<IProduct>) => {
			state.productSelected.push(action.payload);
		},
		removeProductFromPreBuy: (state, action: PayloadAction<string>) => {
			state.productSelected = state.productSelected.filter(
				(product) => product.title !== action.payload
			);
		},
	},
});

export const { addProductToPreBuy, removeProductFromPreBuy } = buySlice.actions;

export default buySlice.reducer;

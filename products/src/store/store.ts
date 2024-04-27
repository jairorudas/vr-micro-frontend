import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import eventReducer from './eventEmitters';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		events: eventReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

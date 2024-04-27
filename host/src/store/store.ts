// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import buyReducer from './products';

export const store = configureStore({
	reducer: {
		preBuy: buyReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<link rel='stylesheet' href='http://localhost:3000/variables.css' />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

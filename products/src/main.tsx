import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<link rel='stylesheet' href='http://localhost:3000/variables.css' />
		<App />
	</React.StrictMode>
);

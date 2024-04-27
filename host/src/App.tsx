/* App.js */
import 'normalize.css';
import Header from 'headerApp/Header';
import Products from 'productApp/Products';
import Cart from 'cartApp/Cart';

import './app.css';

function App() {
	return (
		<>
			<div className='header'>
				<Header />
			</div>
			<main className='main'>
				<Products />
			</main>
			<footer className='footer'>
				<img className='' src='' alt='logo VR' />
				<p className='copyfright-message'>Message</p>
			</footer>
			<Cart />
		</>
	);
}

export default App;

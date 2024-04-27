import Product from './components/organism/product';
import { store as productStore } from './store/store';
import { Provider } from 'react-redux';
function App() {
	return (
		<Provider store={productStore}>
			<Product />;
		</Provider>
	);
}

export default App;
